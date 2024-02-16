const mongoose=require('mongoose');

const schema=mongoose.Schema;

const userSchema = new schema({
    uname: {type:String , required:true},
    email: {type:String , required:true},
    password: {type:String , required:true},
    adress: [String]
});

const User = mongoose.model("User", userSchema);
module.exports =  User;