export const register = (req,res,next)=>{
    try{
        res.status(200).json({message : "got it "})
    }catch(error){
        console.log(error);
        
    }
}


export const login = (req,res,next)=>{
    try{
       
        res.status(200).json({message : "got it "})
    }catch(error){
        console.log(error);
        
    }
}


export const logout = (req,res,next)=>{
    try{
       
        res.status(200).json({message : "got it "})
    }catch(error){
        console.log(error);
        
    }
}