import { useDispatch,useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useState } from "react"
import MenuBar from "./auth/MenuBar"

const LandingPage = () => {
const {userInfo}=useSelector(state=>
  state.auth
)

  return (
    <>
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
   
   
   
    </>
  )
}

export default LandingPage
