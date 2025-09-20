import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import Authrouter from './src/routes/authRouter'

const app = express();


app.get("/",(req,res)=>{
    res.status(200).json({message:"server connected "});
})





















app.listen(5000,()=>{console.log("server started at port 5000")})
