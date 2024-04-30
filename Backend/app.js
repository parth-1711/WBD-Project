const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
let rfs = require("rotating-file-stream");
const helmet = require("helmet");
let path = require("path");
require("dotenv").config();

const cors = require("cors");

// const mongodbURI = process.env.MONGOURI

// mongoose.connect(mongodbURI, { useNewUrlParser: true })
const productRoutes = require("./Routes/Product");
const offerRoutes = require("./Routes/Offers");
const userRoutes = require("./Routes/User");
const queryRoutes = require("./Routes/Query");
const AdminRoutes = require("./Routes/Admin");
const connectDB = require("./utils/connectToDB");

connectDB();

const app = express();
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
let accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});

app.use(morgan("combined", { stream: accessLogStream }));

app.use(productRoutes);
app.use(offerRoutes);
app.use(userRoutes);
app.use(queryRoutes);
app.use(AdminRoutes);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something went wrong !");
});

module.exports = app;

// app.listen(8000, () => {
//   console.log("server is up and running !");
// });

