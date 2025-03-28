const express =require("express");
const router=express.Router();
const Cloudinary=require('../Configs/Cloudinary');
const multer=require("multer")
const post=require('../Model/postModel')
const fs=require("fs")
const verifyUser=require('../Middleware/verifyUser')

const upload=multer({dest:"uploads/"});
router.post("/",verifyUser,upload.single("image"),async(req,res)=>{
    try{
        const result=await Cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);
        const newPost=new post({
            imageUrl: result.secure_url,
            user:req.user.id, 
        })
        await newPost.save();
        res.status(201).json(newPost)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'internal server issue',error});
    }

})

router.get("/",verifyUser,async(req,res)=>{
    try{
        const posts=await post.find().sort({createdAt:-1})
        res.status(500).json(posts)
    }catch(error){
res.status(500).json({message:"internal server issue",error})
    }


})
module.exports=router;