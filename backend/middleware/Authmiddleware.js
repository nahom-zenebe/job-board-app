
const jwt=require('jsonwebtoken')
const User=require('../models/usermodel')
require('dotenv').config();

module.exports.authmiddleware=async(req,res,next)=>{
    const token=req.cookies.Jobpostingapp
    try {

        if(!token){
            return res.status(401).json({ message: "Unauthorized: No token provided." });    
        }
      
            const decodedToken=await jwt.verify(token,process.env.SecretKey)

            const user = await User.findById(decodedToken.userId).select("-password");
            if (!user) {
                return res.status(401).json({ message: "User not found" });
            }
            req.user =user;
            next()
        
    } catch (error) {
        console.error("Token verification error:", error.message);
        return res.status(401).json({ message: "Unauthorized: Invalid token." });
    }

}


module.exports.recruitermiddleware=async(req,res,next)=>{
    const user=req.user
    try {
        if(!user){
            return res.status(403).json({ message: "Access denied." });
        }

        if(user.role!=="recruiter"){
            return res.status(403).json({ message: "Access denied. Recruiter role required." });
        }
        next()
    } catch (error) {
        
    }
    
}