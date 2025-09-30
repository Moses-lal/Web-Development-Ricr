import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import morgan from "morgan"
import authRouter from "./src/routes/authrouter.js"
import userRouter from "./src/routes/userRouter.js"
import connectDB from "./src/config/db.js"

const app = express();

app.use(cors())

app.use(express.json())

app.use(morgan("dev"))


app.use("/auth",authRouter)
app.use("/user", userRouter)







app.get("/",(req,res)=>{
    res.status(200).json({message :"HI i AM On "})
})





app.listen(3000,()=>{
    console.log("server started at 3000");
    connectDB()
})




