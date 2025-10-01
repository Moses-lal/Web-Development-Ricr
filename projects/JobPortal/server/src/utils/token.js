import jwt from "jsonwebtoken";


export const genauthtoken  = async (user,res)=>{
 try {
    const token = await jwt.sign({id: user._id},process.env.SECRECT_KEY,{expiresIn:"1d"})

    res.cookie("tokencookie", token ,{
        maxage : 1000 * 60 * 60*24,
        httponly : true,
        samesite:"lax",
        strict:false,
    })

     return true;


 } catch (error) {
    console.log("token creation error " , error);
     return false    
 }
}