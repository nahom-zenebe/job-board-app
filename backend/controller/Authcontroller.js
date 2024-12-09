const User=require('../models/usermodel')
const bcrypt=require('bcryptjs')
const {GeneratorToken}=require('../libs/GenerateToken')

module.exports.signup=async(req,res)=>{
    
     const {name,email,password,ProfilePic,resume,role}=req.body




     try {

     const exisitingUser=User.findOne({email})
     if(exisitingUser){
      res.status(404).json({
        message: 'User already exisits',
        
      });

     }

      
         const salt=bcrypt.genSalt(10)
         const hashedpasssword=bcrypt.hash(password,salt)

       
        const newUser=new User({
            name,email,password:hashedpasssword,ProfilePic,resume,role
        })

        if(newUser){
        
        GeneratorToken(newUser)
        newUser.save()

        }
        else{
          res.status(404).json({
            message: 'Failed to creating User',
            
          });
        }
        

      res.status(201).json({
        message:"User Regisitered successfully",
        status:"success",
        user:{
            id:newUser._id,
            name:newUser.name,
            email:newUser.email,
            role:newUser.role

        }
      })
        
     } catch (error) {
        console.error('Error during signup:', error.message);

    res.status(500).json({
      message: 'An error occurred during signup. Please try again.',
      error: error.message,
    });
     }

}



module.export.login=async(req,res)=>{

  try {
    
  } catch (error) {
    
  }


}