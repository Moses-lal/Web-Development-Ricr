export const LoginCheck = (req,res,next)=>{
 try{
    console.log("login check");
    next()
    
 }catch(error){
    res.status(401).json({message:"please login frist"})
 }

}