const Admin=require('../models/Admin');

exports.AdminLogin=async(req,res)=>{
    const { username, password } = req.body;
    const foundAdmin=await Admin.find({aname:username,password:password});

    if(foundAdmin.length){
        res.status(201).json({message:'Admin Login Successfull !'});
    }
    res.status(404).json({message:'Admin Not Found !'});
}