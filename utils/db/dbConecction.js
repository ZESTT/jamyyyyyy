import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export function dbConection() {
    mongoose.connect(process.env.DB_CONN).then(()=>{
        console.log("db connected");
    }).catch((err)=>{
            console.log("error",err);
            
    })
}