
const jwt=require('jsonwebtoken')
require('dotenv').config();

module.exports.authmiddleware=async(req,res,next)=>{
    const token=req.cookies.Jobpostingapp
    try {

        if(!token){
            return res.status(401).json({ message: "Unauthorized: No token provided." });    
        }
      
            const decodedToken=await jwt.verify(token,process.env.SecretKey)


            req.user=decodedToken
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