const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const questionSchema = new mongoose.Schema({
    description: {type:String,required:true,trim:true} ,
    tag: [String],
    askedBy: {type:objectId, trim:true , ref:'user'},
    deletedAt: {type:Date}, 
    isDeleted: {type:Boolean, default: false}

},{timestamps:true});

module.exports = mongoose.model('Questions',questionSchema);