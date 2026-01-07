//IMPORTING DEPENDENCIES
const sequelize = require("./config/mysql_db");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./models/UserModel");

//CONFIGURING ENVIRONMENT VARIABLES
const app = express();

app.use(cors({ origin: "*", methods: "GET,POST,PUT,DELETE,PATCH" }));
app.use(express.json());
app.use(cookieParser());

//IMPORTING ROUTES
const userRoutes = require("./routes/UserRoute");
const signInUpRoutes = require("./routes/SignIn&UpRoute");

//USING ROUTES
app.use("/api/users", userRoutes);
app.use("/api/auth", signInUpRoutes);

//STARTING THE SERVER AND CONNECTING TO MYSQL DATABASE
sequelize
  .authenticate()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port ${process.env.PORT} and MySQL connected successfully.`
      );
    });
    return sequelize.sync({ force: false });
  })
  .then(() => {
    console.log("✅ Database synchronized successfully.");
  })
  .catch((err) => {
    console.error("❌ MySQL connection error:", err);
  });
