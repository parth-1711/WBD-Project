const express = require("express");

const router = express.Router();
const usercontroller=require('../controller/User');

router.post('/signUp',usercontroller.signUp);
router.post('/signIn',usercontroller.signIn);

module.exports=router;