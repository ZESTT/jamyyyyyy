 import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


export function auth(req,res,next) {
        let token =req.header('token')
  jwt.verify(token, process.env.JWT_SEC,async function(err, decoded) {
  if (err) {
    res.json({message:"invalid Token",err})
    
  }else{
    console.log(decoded);
    req.userId = decoded.user._id
    next()
  }
});
}