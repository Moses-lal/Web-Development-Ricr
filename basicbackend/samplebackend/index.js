import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import cors from 'cors'
import morgan from 'morgan'
import Authrouter from './src/routes/authRouter.js'
import Userrouter from './src/routes/userRouter.js'
import connectDB from './src/config/db.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



app.use("/auth",Authrouter)
app.use("/user",Userrouter)



app.get("/",(req,res)=>{
    res.status(200).json({message:"server connected "});
})



// app.use((err,req,res,next)=>{
//     const ErrorMessage = err.message || "internal server error ";
//     const ErrorCode = err.statusCode || 500 ;
//     res.status(ErrorCode).json({message :ErrorMessage});

// })





// let port ;
// if(!process.env.PORT){
//     port = 5000;
// } else{
//     port = process.env.PORT
// }


const port = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log("server started at port", port)
    connectDB();
})
