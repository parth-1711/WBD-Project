const express = require("express");

const router = express.Router();
const AdminController=require('../controller/Admin');

router.post('/AdminLogin',AdminController.AdminLogin);
router.post('/adminAddUser',AdminController.adminAddUser);

module.exports=router;