import mongoose from "mongoose"

const teamSchema=mongoose.Schema({
  name:{type:String,required:true},
  members:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true
  }],
  mot:{type:String,required:true},
  challenges:[{
    type:mongoose.Schema.Types.ObjectId,
      ref:'Challenge',
      

    }],


},{timestamps:true});

const Team=mongoose.model("Team",teamSchema);

export default Team;

