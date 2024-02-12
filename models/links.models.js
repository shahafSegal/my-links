const mongoose=require('mongoose')

const linkSchema= new mongoose.Schema({
    title:{type:String,required:true},
    link:{type:String,required:true},
    description:{type:String,required:true},
    userID:{type:String,required:false}
})
const LinkModel =mongoose.model('links',linkSchema)
module.exports={LinkModel}