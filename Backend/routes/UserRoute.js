const express = require("express");
const { upload } = require("../config/cloudinary");
const AuthMiddleware = require("../middlewares/TokenVerify");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

//Route for getting all users
router.get("/", getAllUsers);

//Route for getting user by ID
router.get("/:id", AuthMiddleware, getUserById);

//Route for updating user
router.put("/:id", AuthMiddleware, upload.single("image"), updateUser);

//Route for deleting user
router.delete("/:id", AuthMiddleware, deleteUser);

module.exports = router;
