const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true }); 

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),                  
  filename: (_req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

app.post('/upload', upload.single('avatar'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded');
  res.json({ filename: req.file.filename });
});

app.listen(3000, () => console.log('Server running on :3000'));
