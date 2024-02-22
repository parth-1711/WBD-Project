const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require("mongoose");
const morgan=require('morgan')
let rfs=require('rotating-file-stream');
const helmet=require('helmet');
let path=require('path');


const cors=require('cors')

const mongodbURI = "mongodb+srv://parthirache8:ufPeWVX7HabgpyVh@cluster0.eo9svyz.mongodb.net/Phoenix-E-Mart"

mongoose.connect(mongodbURI, { useNewUrlParser: true })

const app=express();
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(helmet())
let accessLogStream=rfs.createStream("access.log",{interval:'1d',path:path.join(__dirname,'log')})

app.use(morgan('combined',{stream:accessLogStream}))


const productRoutes=require('./Routes/Product');
const offerRoutes=require('./Routes/Offers')
const userRoutes=require('./Routes/User');
const queryRoutes=require('./Routes/Query');
const AdminRoutes=require('./Routes/Admin');

app.use(productRoutes);
app.use(offerRoutes);
app.use(userRoutes);
app.use(queryRoutes);
app.use(AdminRoutes);

app.listen(8000,()=>{
    console.log('server is up and running !');
})