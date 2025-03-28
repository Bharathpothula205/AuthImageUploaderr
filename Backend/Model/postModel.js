const mongoose=require("mongoose");
const postSchema=mongoose.Schema({
imageUrl:{
    type:String,
    required:true,
},
user:{
type:mongoose.Schema.Types.ObjectId,
ref:"user",
required:true,
},

},{timestamp:true})

module.exports=mongoose.model("post",postSchema)