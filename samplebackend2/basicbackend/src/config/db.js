import mongoose from "mongoose";

const connectDB = async ()=>{
   try {
    const result = await mongoose.connect(process.env.MONGO_DB_URI)
    console.log("mongo db connect at ", result.connection.host);
    
   } catch (error) {
    console.log("connection error ");
    console.log(error);
    process.exit(1)
   }
    
}


export default connectDB;
