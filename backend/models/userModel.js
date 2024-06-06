import mongoose from "mongoose";


const {ObjectId}=mongoose.Schema;








const userSchema=mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  isAdmin:{
    type:Boolean,
    required:true,
    default:false
  },
  email:{
    type:String,
    requiered:true,
   unique:true
  },
  password:{
    type:String,
    required:true
  },
  team:{
    type:ObjectId,
    ref:"Team",
  },
  Challenges:[{
    type:ObjectId,
    ref:"Challenge"
  }]
},{timestamps:true})

const User=mongoose.model("User",userSchema);

export default User;

