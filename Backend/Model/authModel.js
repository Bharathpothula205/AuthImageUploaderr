const mongoose=require("mongoose");

const authSchema=new mongoose.Schema({
username:{
type:String,
required:true,
unique:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
}
},{timeestamps:true});

module.exports=mongoose.model("user",authSchema)