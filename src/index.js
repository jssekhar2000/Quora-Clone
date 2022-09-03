const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const route = require('./route/routes')
const app = express();

app.use(express.json());
app.use(multer().any())

mongoose.connect('mongodb+srv://SekharMohanta:6VSdjALwpC9DyChf@cluster0.brxpv.mongodb.net/QuoraDB',
{useNewUrlParser:true})
.then(()=> console.log('MongoDB is connected...'))
.catch((err)=> console.log(err));

app.use('/',route);

app.listen(3000,()=>console.log('Express app is Running on Port '+3000))