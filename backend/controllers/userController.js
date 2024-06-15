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


});


const loginUser=asyncHandler(async(req,res)=>{
  const {email,password}=req.body;
  
  
const existingUser=await User.findOne({email});

if (existingUser){
  const isPasswordValid= await bcrypt.compare(password,existingUser.password)


if (isPasswordValid){
  createToken(res,existingUser._id)

   res.status(201).json({
    _id:existingUser._id,
    username:existingUser.username,
    isAdmin:existingUser.isAdmin,
   }) 
}else{
  res.status(404);
  throw new Error("Password Incorrect");
};
}else{
  res.status(404);
  throw new Error("User Not Found");
}
})

const logoutCurrentUser=asyncHandler(async(req,res)=>{
res.cookie("jwt","",{
  httpOnly:true,
  expires:new Date(0),
});


res.status(200).json({message:"logged out successfully"});
})







export {createUser,loginUser,logoutCurrentUser}