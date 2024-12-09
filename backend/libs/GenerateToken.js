const jwt=require('jsonwebtoken')
require('dotenv').config()

const secretKey=process.env.SecretKey



module.exports.GeneratorToken=(user)=>{
    const token=jwt.sign({id:user.id,role:user.role},secretKey,{expressIn:'1h'})
    res.cookie("Job-posting-app", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, 
        sameSite: "strict", 
        secure: process.env.NODE_ENV !== "development",
      
    });
   
}