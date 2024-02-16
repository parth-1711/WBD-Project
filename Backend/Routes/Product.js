const express = require("express");

const router = express.Router();
const productController=require('../controller/Product')

router.get('/getAllProducts',productController.getAllProducts);
router.get('/getSingleProduct',productController.getSingleProduct);
router.post('/postProduct',productController.postProduct);
router.get('/getSearchResults',productController.getSearchResults);

module.exports=router;