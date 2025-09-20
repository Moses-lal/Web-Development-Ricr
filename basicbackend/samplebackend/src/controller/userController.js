export const Update = (req,res)=>{
 res.status(200).json({message:"the information is updated "})
};

export const ChangePass = (req,res)=>{
 res.status(200).json({message:"patch comand "})
};

export const Delete = (req,res)=>{
 res.status(204).json({message:"the information is deleted "})
};