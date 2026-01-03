//IMPORTING DEPENDENCIES
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./config/mysql_db");

//CONFIGURING ENVIRONMENT VARIABLES
dotenv.config();
const app = express();

app.use(cors({ origin: "*", methods: "GET,POST,PUT,DELETE,PATCH" }));
app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port ${process.env.PORT} and MySQL connected successfully.`
      );
    });
  })
  .catch((err) => {
    console.error("❌ MySQL connection error:", err);
  });
