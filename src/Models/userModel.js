const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
{

  fname: {type:String, required:true,trim:true},
  lname: {type:String, required:true,trim:true},
  email: {type:String, required:true, trim:true, unique:true,lowercase:true},
  phone: {type:String, required:true, unique:true}, 
  password: {type:String, required:true,minlength:8, maxlength:15}, // encrypted password
  creditScore: {type:Number,required:true}
},
{timestamps:true}
);

module.exports= mongoose.model('User',userSchema)