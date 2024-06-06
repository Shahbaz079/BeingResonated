import asyncHandler from "../middlewares/asyncHandler.js"
import bcrypt from "bcryptjs"
import User from "../models/userModel.js";
import createToken from "../utils/createToken.js";

const createUser=asyncHandler(async(req,res)=>{
const {username,email,password}=req.body;


if(!username||!email||!password){
  throw new Error("please fill all the inputs");
}
const userExist=await User.findOne({email});
if(userExist){
  res.status(400).send("User already exists");
}

const salt=await bcrypt.genSalt(18);

const hashedPassword=await bcrypt.hash(password,salt);

const newUser=new User({
  username,email,password:hashedPassword
})

try {
  await newUser.save();

  createToken(res,newUser._id)

  res.status(201);
  res.json({
    _id:newUser._id,
    username:newUser.username,
    email:newUser.email,
    isAdmin:newUser.isAdmin
  })


} catch (error) {
  
  res.status(400)
  throw new Error("invalid User Data")
}


})



export {createUser}