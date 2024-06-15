import { useDispatch,useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useState } from "react"
import MenuBar from "./auth/MenuBar"

const LandingPage = () => {
const {userInfo}=useSelector(state=>
  state.auth
);

if (userInfo) {
  return (
    // Block of code for when the condition is true
    <div className="container  h-[100vh] flex flex-wrap justify-center items-center overflow-hidden" >

    <div className={userInfo?"w-[50%] flex flex-col relative":"hidden"}>
      <MenuBar/>
      <div className="text-center font-bold h-[30%] mb-[4rem]">Hello {userInfo.username}!</div>

      <div className="h-[70%] border rounded-lg pt-[12rem] pb-[12rem] pl-[2rem]" >
        Notifications from your team
        and challenges you are dealing with will appear here
      </div>


    </div>

   <div className={userInfo?"hidden":"flex flex-wrap"}>
      <Link to='' className="font-bold border rounded-lg m-[2rem] p-4 bg-green-400 ">Login</Link>
      <Link to='/register' className="font-bold border rounded-lg m-[2rem] p-4 bg-green-400 ">Register</Link>
    </div>



    <div 
    className={userInfo?"flex flex-col w-[45%] text-left":"flex flex-wrap w-[65%] text-center"}>
      <Link to='' className={userInfo?"w-[100%] text-left border rounded-lg p-4 m-3":"w-[20%] h-[20%] ml-[2rem] mt-[4rem] border rounded-lg"}>
      <div className="">
        <img src="" alt="" />
        <div className="">
        <h1>Socialize</h1>
        <p>Get to Know what's going on your campus</p>
        </div>
      </div>
      </Link>

      <Link to='' className={userInfo?"w-[100%] text-left border rounded-lg p-4 m-3":"w-[20%] h-[20%] ml-[2rem] mt-[4rem] border rounded-lg"}>
      <div className="">
        <img src="" alt="" />
        <div className="">
        <h1>Your Team</h1>
        <p>Either buid your own team or be a part of team whose members share same vision as yours 
        </p>
        </div>
      </div>
      </Link>

      <Link to='' className={userInfo?"w-[100%] text-left border rounded-lg p-4 m-3":"w-[20%] h-[20%] ml-[2rem] mt-[4rem] border rounded-lg"}>
      <div className="">
        <img src="" alt="" />
        <div className="">
        <h1>Travel And Vlog</h1>
        <p>We are here to assist the students of our campus to plan thier vacations</p>
        </div>
      </div>
      </Link>

      <Link to='' className={userInfo?"w-[100%] text-left border rounded-lg p-4 m-3":"w-[20%] h-[20%] ml-[2rem] mt-[4rem] border rounded-lg"}>
      <div className="">
        <img src="" alt="" />
        <div className="">
        <h1>Challenges</h1>
        <p>Find the problems that can be solved by you or your team and win prizes </p>
        </div>
      </div>
      </Link>

      <Link to='' className={userInfo?"w-[100%] text-left border rounded-lg p-4 m-3":"w-[20%] h-[20%] ml-[2rem] mt-[4rem] border rounded-lg"}>
      <div className="">
        <img src="" alt="" />
        <div className="">
        <h1>Academics</h1>
        <p>Exam season is coming?No worries we are here to help you</p>
        </div>
      </div>
      </Link>

    </div>
    </div>
   
  );
} else {
  return (
    
    // Block of code for when the condition is false
    <div>
       <div className="container w-[100vw] h-[90vh] m-0 " >
    

    <div className="w-[50%] h-[80%]">

      <div className="w-[80%] border rounded-lg h-[100%] m-4 p-4 text-center underline text-2xl">
        BEing Resonated 
      </div>
    </div>
    <div className="m-4 flex items-center justify-between">
<Link to='/login' className="p-4 px-7 font-bold border border-lg rounded-lg bg-blue-950 m-5 cursor-pointer hover:bg-blue-800 transition-all">Login</Link>
<Link to='/register' className="p-4 px-7 border border-lg rounded-lg bg-blue-950 m-5 cursor-pointer font-bold hover:bg-blue-800 transition-all">Register</Link>
    </div>

  </div>
    
    </div>


  );
}
  
}




export default LandingPage;
