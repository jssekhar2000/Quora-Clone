const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.objectId;

const answerSchema = new mongoose.Schema({

  answeredBy: {type:objectId, ref:'user',required:true},
  text: {type:String,required:true,trim:true},
  questionId: {type:objectId, ref:'Question',required:true},
  isDeleted : {type:Boolean,default:false},

},{timestamps:true});


module.exports = mongoose.model('Answer',answerSchema);