import { userModel } from "../../utils/models/userModel.js"
 import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const signup = async(req,res)=>{
    let {name,email,password}=req.body
    let user = await userModel.findOne({email})

    if (user) {
        res.json({message:"Account already Exist"})
    }else{
        bcrypt.hash(password, Number(process.env.ROUNDS), async function(err, hash) {
            await userModel.insertMany({name,email,password:hash})
            res.json({message:"succes"})
});
    } 
}


const login = async(req,res)=>{
    let {email,password}=req.body
    let user = await userModel.findOne({email}) //true // false =>{}
        console.log(user);
        

        if (user) {
         let match =await bcrypt.compare(password,user.password); //true
            if (match) {
                var token = jwt.sign({user }, process.env.JWT_SEC);
            res.json({message:"login succes",token})
            }else{
            res.json({message:"Password Incorrect"})

            }
        }else{
           res.json({message:"Account Not Found"})
        }
    
}
export{
    signup,
    login
}