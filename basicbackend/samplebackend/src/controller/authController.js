import User from "../models/userModel.js"




export const Register = async (req,res,next)=>{
   try{
     
    const {fullname, email, password } = req.body;

    if(!fullname || !email || !password){
      const error = new Error ("all feilds required ")
      error.statuscode = 400;
      return next(error);        
    }


    const existinguser = await User.findOne({ email });
    if(existinguser){
        const error = new Error("email already registered") 
        error.statuscode = 409;
        return next(error)
    }

    const newUser = await User.create({
        fullname,
        email,
        password,
    }) 

    res.status(201).json({message : `welcome ${newUser.fullname} `})

   } 
   catch(error){
     next(error);
   }
};

export const Login = (req,res)=>{
    res.status(200).json({message:"User login succesfull!! "});
};

export const Logout =(req,res)=>{
    res.status(200).json({message:" logout succesful "});
}; 