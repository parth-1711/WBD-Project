const express = require("express");
const multer = require('multer');


const router = express.Router();
const productController=require('../controller/Product')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      return cb(null, './images'); // Directory to save uploads
    },
    filename: (req, file, cb) => {
      return cb(null,file.originalname); // Unique filename
    }
  });
  
  const upload = multer({ storage: storage })

router.get('/getAllProducts',productController.getAllProducts);
router.get('/getSingleProduct',productController.getSingleProduct);
router.post('/postProduct',upload.array("images",5),productController.postProduct);
router.get('/getSearchResults',productController.getSearchResults);

module.exports=router;