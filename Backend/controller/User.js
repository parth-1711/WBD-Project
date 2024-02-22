const User = require("../models/User");
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

// const users = [
//   { id: 1, username: "user1", password: "password1" },
//   { id: 2, username: "user2", password: "password2" },
// ];

const secretKey = "yourSecretKey";

exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "Token not provided" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  });
}

exports.signUp = async (req, res) => {
  const { username, Email, password } = req.body;

  // For simplicity, don't perform actual validation here
  // Add user to the database (don't store passwords in plain text in production)
  let newUser = new User({
    uname: username,
    email: Email,
    password: password
  })

  await newUser.save();

  res.status(201).json({ message: 'User registered successfully' });
  // const { username, password } = req.body;

  // // For simplicity, don't perform actual validation here
  // // Add user to the database (don't store passwords in plain text in production)
  // users.push({ id: users.length + 1, username, password });

  // res.status(201).json({ message: "User registered successfully" });
};

exports.signIn = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.find({ uname: username, password: password });
  // users.find(
  //   (u) => u.username === username && u.password === password
  // );

  console.log(user);
  if (user.length) {
    const token = jwt.sign({ id: user._id, username: user.username }, secretKey, {
      expiresIn: "1h",
    });
    let userdata = user[0]
    res.status(201).json({ token, userdata });
  }
  else {
    res.status(401).json({ message: "Invalid username or password" });
  }

};

exports.getUserProfile = (req, res) => {
  res.json({ user: req.user });
};


exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find({});
    res.json({ users: users })
  } catch (error) {
    console.log(error);
  }
}

exports.deleteUser = async (req, res) => {
  const userId = req.query.id;
  console.log(userId);

  try {
    // Find and delete the user based on the user ID
    const deletedUser = await User.findOneAndDelete({ _id: userId });

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(201).json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

exports.changePass = async (req, res) => {
  try {
    let users = await User.find({});
    res.json({ users: users })
  } catch (error) {
    console.log(error);
  }
}

exports.updatePass = async(req,res) => {

  try {
    let unamee= req.body.username
    let pass = req.body.newPass
    let users = await User.findOneAndUpdate({uname:unamee}, {password:pass});
    res.json({ users: users })
  } catch (error) {
    console.log(error);
  }
}

