const express=require("express");
const router=express.Router();
const jwt=require("jsonwebtoken")
const authUser=require('../Model/authModel')
const bcrypt=require('bcryptjs');

router.post('/register',async(req,res)=>{
try{
const {username,email,password}=req.body;
const existingUser=await authUser.findOne({email});
if(existingUser) return res.status(400).json({message:"user already exists"});
const salt=await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(password,salt);
const newUser=await authUser.create({
    username,
    email,
    password:hashedPassword,
});
res.status(201).json({message:"success",userId:newUser._id});
}catch(error){
    res.status(500).json({message:"internal server.js",error});
}
});


router.post('/login',async(req,res)=>{
try{
const {email,password}=req.body;
const user=await authUser.findOne({email});
if(!user) return res.status(404).json({message:"user not found"});
const isMatch=await bcrypt.compare(password,user.password);
if(!isMatch) return res.status(400).json({message:'invalid credential'});
const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1D"});
res.status(201).json({message:"logined succesfully",token,user:{id:user._id,username:user.username}});
}catch(error){
    res.status(500).json({message:"internal server.js",error});
}
});


module.exports=router;