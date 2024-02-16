const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require("mongoose");

const cors=require('cors')


const mongodbURI = "mongodb+srv://parthirache8:ufPeWVX7HabgpyVh@cluster0.eo9svyz.mongodb.net/Phoenix-E-Mart"

mongoose.connect(mongodbURI, { useNewUrlParser: true })

const app=express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const productRoutes=require('./Routes/Product');
const offerRoutes=require('./Routes/Offers')
const userRoutes=require('./Routes/User');
const queryRoutes=require('./Routes/Query');

app.use(productRoutes);
app.use(offerRoutes);
app.use(userRoutes);
app.use(queryRoutes);

app.listen(8000,()=>{
    console.log('server is up and running !');
})