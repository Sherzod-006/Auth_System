//IMPORTING DEPENDENCIES
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./config/mysql_db");

//IMPORTING MODELS
require("./models/UserModel");

//CONFIGURING ENVIRONMENT VARIABLES
dotenv.config();
const app = express();

app.use(cors({ origin: "*", methods: "GET,POST,PUT,DELETE,PATCH" }));
app.use(express.json());

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
