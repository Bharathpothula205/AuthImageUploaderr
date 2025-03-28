const Cloudinary=require("Cloudinary").v2;

Cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
})

module.exports=Cloudinary;