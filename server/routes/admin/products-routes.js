const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Set up multer storage options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Naming file with timestamp and extension
  },
});

const upload = multer({ storage: storage });

// Image upload route for admin to upload product images
router.post("/upload-image", upload.single("my_file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }
    res.status(200).send({
      message: "File uploaded successfully",
      file: req.file,
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
