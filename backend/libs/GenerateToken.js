const jwt=require('jsonwebtoken')
require('dotenv').config()

const secretKey=process.env.SecretKey



module.exports.GeneratorToken=async(user,res)=>{


    try {

        if(!secretKey){
            throw new Error("Secret key is not defined in the environment variables.");
        }
        const token=jwt.sign({id:user.id,role:user.role},secretKey)
    res.cookie("Job-posting-app", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, 
        sameSite: "strict", 
        secure: process.env.NODE_ENV !== "development",
      
    });
   
    return token;
        
    } catch (error) {
        console.error("Error generating token:", error.message);
    throw error; 
    }
    
}