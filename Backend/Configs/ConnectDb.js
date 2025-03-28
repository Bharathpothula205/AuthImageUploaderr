const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
       const conn= await mongoose.connect(process.env.MONGO_URI);
       console.log("mongoo DB connected");
    }catch(error){
        console.log("error connecting to mongoDb",error);
    }
}

module.exports=connectDB;
