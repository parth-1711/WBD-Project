const Admin=require('../models/Admin');
const User=require('../models/User');
const nodemailer = require('nodemailer');

require('dotenv').config();

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.MAIL_ID,
//         pass: process.env.MAIL_ID_PASSWORD
//     }
// });


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

    // let mailOptions = {
    //     from: process.env.MAIL_ID,
    //     to: email,
    //     subject: 'User Creation',
    //     text: 'This is a test email from nodemailer!'
    // };

    
    
  
    const newUser = new User({
      uname: uname,
      email: email,
      password: uname,
      address: address,
      contactNumber: contactNumber,
    })
    

    await newUser.save();

    // transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //         console.log(error);
    //         res.status(401).json({ message: "Not a valid User Email !" });
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });
    
    res.status(201).json({ message: "User registered successfully!" });
  }