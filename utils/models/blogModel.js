import  mongoose  from "mongoose";

const blogschema =mongoose.Schema({
    title:String,
    desc:String,
    createdBy:{
            type:mongoose.Types.ObjectId, // id user 
            ref:'user'
    }
},{
    timestamps:true
})

export const blogmodel = mongoose.model('blog',blogschema)
