const express = require('express');
const router = express.Router();
const phoneController = require("../controllers/phoneController");
const multer  = require('multer')
var fs = require('fs');
const path = require('path');

const directory = 'files/';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, directory)
  },
  filename: (req, file, cb) => {
    fs.readdir(directory, (err, files) => {
      if (err) throw err;
    
      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }
    });

      cb(null, 'file-' + Date.now() + '.' +
      file.originalname.split('.')[file.originalname.split('.').length-1])}
})


const upload = multer({ storage: storage })


/* GET users listing. */
router.get("/",phoneController.index)
router.post("/",phoneController.create)
router.get("/:id",phoneController.show)
router.patch("/:id",phoneController.update)
router.delete("/:id",phoneController.destroy)
router.post("/upload",upload.single('uploaded_file'),phoneController.upload)

module.exports = router;
