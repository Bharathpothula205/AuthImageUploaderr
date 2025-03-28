const jwt=require("jsonwebtoken");

const verifyUser=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({message:"Access denied"});
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded);
        req.user=decoded;
        next();
    } catch (error) {
        return res.status(401).json({message:"token invalid"});
    }
}

module.exports=verifyUser