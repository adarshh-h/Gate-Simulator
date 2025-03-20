const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware");
const { getProfile, updateProfile } = require("../controllers/profileController");

const router = express.Router();

// Get user profile
router.get("/", verifyToken, getProfile);

// Update user profile (restricted to admins)
router.put("/", verifyToken, updateProfile);

module.exports = router;