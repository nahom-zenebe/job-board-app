
const jwt=require('jsonwebtoken')
const User=require('../models/usermodel')
require('dotenv').config();

module.exports.authmiddleware = async (req, res, next) => {
    try {



      const token = req.cookies.Jobpostingapp;
    
     
  
      if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided." });
      }
  

      const decodedToken = jwt.verify(token, process.env.SecretKey);
 
      if (!decodedToken || !decodedToken.userId) {
        return res.status(401).json({ message: "Unauthorized: Invalid token." });
      }
  
      
      const user = await User.findById(decodedToken.userId).select("-password");
      if (!user) {
        return res.status(401).json({ message: "Unauthorized: User not found." });
      }
  

      req.user = user;
      
      next();
    } catch (error) {
      console.error("Token verification error:", error.message);
      return res.status(401).json({ message: "Unauthorized: Invalid or expired token." });
    }
  };


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
        return res.status(401).json({ message: "Unauthorized: Invalid or expired token." });
    }
    
}