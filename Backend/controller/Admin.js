const Admin=require('../models/Admin');
const User=require('../models/User'); 

require('dotenv').config();

exports.AdminLogin=async(req,res)=>{
    const { username, password } = req.body;
    const foundAdmin=await Admin.find({aname:username,password:password});

    if(foundAdmin.length){
        res.status(201).json({message:'Admin Login Successfull !'});
    }
    res.status(404).json({message:'Admin Not Found !'});
}

exports.adminAddUser = async (req, res) => {
    const {uname, email, contactNumber, address} = req.body;
    const newUser = new User({
      uname: uname,
      email: email,
      password: uname,
      address: address,
      contactNumber: contactNumber,
    })
    

    await newUser.save();
    
    res.status(201).json({ message: "User registered successfully!" });
  }