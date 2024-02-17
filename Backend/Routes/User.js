const express = require("express");

const router = express.Router();
const usercontroller=require('../controller/User');

router.post('/signUp',usercontroller.signUp);
router.post('/signIn',usercontroller.signIn);
router.post('/adminAddUser',usercontroller.adminAddUser);
router.get('/getAllUsers', usercontroller.getAllUsers);
router.delete('/deleteUser', usercontroller.deleteUser);

module.exports=router;