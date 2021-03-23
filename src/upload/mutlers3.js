const multer = require("multer");
const dotenv  = require('dotenv');
const path = require('path');
const crypto = require('crypto');
const aws   = require('aws-sdk');
const multerS3 = require('multer-s3');

const stotageTypes = {
//     local: multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'upload'));  
//         }
//      }),

     s3: multerS3({
         s3: new aws.S3({
            accessKeyId: process.env.AWS_ACCESS_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
         }),
         bucket: process.env.AWS_BUCKET_NAME,
         contentType: multerS3.AUTO_CONTENT_TYPE,
//          Key: (req, file, cb) => {
//             crypto.randomBytes(16, (err, hash) => {
//               if (err) cb(err);
      
//               const fileName = `${file.originalname}`;
      
//               cb(null, fileName);
//             });
//           },
         
//      })
        })
    }
    

module.exports = {
    storage: stotageTypes['s3'], 
}
