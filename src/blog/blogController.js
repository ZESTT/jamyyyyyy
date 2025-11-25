import { blogmodel } from "../../utils/models/blogModel.js"

const getAllBlogs = async(req,res)=>{
let blog = await blogmodel.find().populate('createdBy','name -_id')
res.json({message:"sucess",blog})
}


const getuserBlogs = async(req,res)=>{
    let{_id}=req.params
let blogs = await blogmodel.find({createdBy:_id}).populate('createdBy','name -_id')
res.json({message:"sucess",blogs})
}


const addblog = async(req,res)=>{
    let {title ,desc}=req.body 
     await blogmodel.insertMany({title ,desc})
        res.json({message:"sucess"})

}

const updateblog = async(req,res)=>{
    let {_id,title ,desc}=req.body 
 await blogmodel.findByIdAndUpdate({_id},{title ,desc},{new:true})
        res.json({message:"sucess"})
}

const deleteblog = async(req,res)=>{
    let {_id}=req.body 
 await blogmodel.findByIdAndDelete({_id})
        res.json({message:"sucess"})
}

export{
    getAllBlogs,
    addblog,
    updateblog,
    deleteblog,
    getuserBlogs
}