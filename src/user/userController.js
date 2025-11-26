import { userModel } from "../../utils/models/userModel.js"
 import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv' // 🛑 1. تأكد من استيراد dotenv هنا

dotenv.config()

const signup = async(req,res)=>{
    let {name,email,password}=req.body
    
    try {
        // 1. البحث عن المستخدم
        let user = await userModel.findOne({email})

        if (user) {
            return res.json({message:"Account already Exist"}) // استخدام return لإيقاف التنفيذ
        }
        
        // 2. تشفير كلمة المرور باستخدام await
        const hashedPassword = await bcrypt.hash(password, Number(process.env.ROUNDS)); 
        
        // 3. إدراج المستخدم الجديد
        // نستخدم insertMany للمحافظة على الكود السابق، مع تمرير كلمة المرور المشفرة
        await userModel.insertMany({name,email,password:hashedPassword});
        
        return res.json({message:"succes"}); // إرسال رسالة النجاح

    } catch (error) {
        // 4. التعامل مع أي خطأ في قاعدة البيانات أو التشفير
        console.error("Signup Error:", error.message);
        // إرسال رمز 500 واضح
        return res.status(500).json({
            message: "Internal server error during signup process. Check server logs.", 
            details: error.message
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