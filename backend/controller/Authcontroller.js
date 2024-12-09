const User=require('../models/usermodel')
const bcrypt=require('bcryptjs')
const {GeneratorToken}=require('../libs/GenerateToken')

module.exports.signup=async(req,res)=>{
    
     const {name,email,password,ProfilePic,resume,role}=req.body




     try {

     const exisitingUser=await User.findOne({email})
     if(exisitingUser){
      return res.status(404).json({
        message: 'User already exisits',
        
      });

     }

      
        
         const hashedpasssword=await bcrypt.hash(password,10)

       
        const newUser=new User({
            name,email,password:hashedpasssword,ProfilePic,resume,role
        })

      
        

        newUser.save()

        GeneratorToken(newUser._id,res)

        
        

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



module.exports.login=async(req,res)=>{
  const { email, password } = req.body

  try {

    const exisitinguser=await User.findOne({email})

        if(!exisitinguser){
            return res.status(400).json({message:'Invalid credentials'})
        }

        const isPassword=await bcrypt.compare(password,exisitinguser.password)

        if(!isPassword){
            return res.status(400).json({message:'Invalid credentials'})
        }
     

    GeneratorToken(exisitinguser._id,res)

res.status(201).json({
        message:"User Loggin successfully",
        status:"success",
        user:{
            id:exisitinguser._id,
            name:exisitinguser.name,
            email:exisitinguser.email,
            role:exisitinguser.role

        }
      })
    
    
  } 
  catch (error) {
    console.error('Error during signup:', error.message);

    res.status(500).json({
      message: 'An error occurred during signup. Please try again.',
      error: error.message,
    });
  }


}
module.exports.logout=async(req,res)=>{
  try {
       res.cookie("Job-posting-app",'',{maxAge:0})
       res.status(200).json({message:"Logged out successfully"})

    
  } catch (error) {

    res.status(500).json({
      message: 'An error occurred during logout. Please try again.',
      error: error.message,
    });
  }

}