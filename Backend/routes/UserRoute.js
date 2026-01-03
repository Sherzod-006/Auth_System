const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

// Create user
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Route for getting all users
router.get("/", getAllUsers);

//Route for getting user by ID
router.get("/:id", getUserById);

//Route for updating user
router.put("/:id", updateUser);

//Route for deleting user
router.delete("/:id", deleteUser);

module.exports = router;
