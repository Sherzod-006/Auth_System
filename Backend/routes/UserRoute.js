const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

//Route for getting all users
router.get("/", getAllUsers);

//Route for getting user by ID
router.get("/:id", getUserById);

//Route for updating user
router.put("/:id", updateUser);

//Route for deleting user
router.delete("/:id", deleteUser);

module.exports = router;
