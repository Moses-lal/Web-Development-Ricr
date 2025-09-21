import mongoose from "mongoose";


const connectDB = async () =>{
    try {
        const result = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongo DBz is Connected at ", result.connection.host);
        
    }catch(error){
        console.log("MONGO DB connection error ");
        console.log(error);
        process.exit(1);
    }
}



export default connectDB;


