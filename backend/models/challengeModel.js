import mongoose from "mongoose"


const ChallengeSchema=mongoose.Schema({
  name:{type:String,required:true},
  
  description:{type:String,required:true},

  difficulty:{
    type:String,
    enum:['Easy','Medium','Tough'],
    required:true
  },
  
  timeLimit:{
    type:Date,
    required:true
  },
  workingTeams:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Team",
  
  default:0

  }]

},{timestamps:true});

const Challenge=mongoose.model("Challenge",ChallengeSchema);

export default Challenge;
