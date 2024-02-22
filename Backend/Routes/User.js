const express = require("express");

const router = express.Router();
const usercontroller=require('../controller/User');

router.post('/signUp',usercontroller.signUp);
router.post('/signIn',usercontroller.signIn);
router.post('/Changepass', usercontroller.changePass)
router.get('/getAllUsers', usercontroller.getAllUsers);
router.delete('/deleteUser', usercontroller.deleteUser);
router.get('/updatePass', usercontroller.updatePass)
module.exports=router;