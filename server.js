const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Set up the upload folder
const UPLOAD_FOLDER = path.join(__dirname, "uploads");

// Ensure the upload folder exists
if (!fs.existsSync(UPLOAD_FOLDER)) {
  fs.mkdirSync(UPLOAD_FOLDER, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const { subject, lesson } = req.body;

    // Create the subject and lesson directories if they don't exist
    const subjectPath = path.join(UPLOAD_FOLDER, subject);
    const lessonPath = path.join(subjectPath, lesson);
    fs.mkdirSync(lessonPath, { recursive: true });

    cb(null, lessonPath); // Set the upload destination
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original file name
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Only accept PDF, PNG, and JPG files
    const filetypes = /pdf|png|jpg|jpeg/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Only PDF, PNG, and JPG files are allowed!");
    }
  },
});

// Serve the upload form (this is optional, you can use your own frontend)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle file uploads
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
