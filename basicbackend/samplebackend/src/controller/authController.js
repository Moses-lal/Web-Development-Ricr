export const Register = (req,res)=>{
    res.status(201).json({message:"User registration succesfull!! "});
};

export const Login = (req,res)=>{
    res.status(200).json({message:"User login succesfull!! "});
};

export const Logout =(req,res)=>{
    res.status(200).json({message:" logout succesful "});
}; 