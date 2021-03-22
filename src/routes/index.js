const express = require('express');
const dotenv  = require('dotenv');
const router = express.Router();
dotenv.config();


const uploadController = require( '../controllers/uploadController');
const multer = require('multer');
const set_multer = require('../uploads_aws/mutlers3');



  router.get('/', (_, res) => res.send('Welcome to S3 File Uploader'));
  router.post('/upload', multer(set_multer).single("File"), uploadController.uploadMyFile);
  router.get('/files/',uploadController.getFiles);

module.exports = router;

