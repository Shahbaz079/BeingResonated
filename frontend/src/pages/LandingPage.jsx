import { Link } from "react-router-dom"

const LandingPage = () => {


  return (
    <>
   <div className="container  h-[100vh] flex flex-wrap justify-center items-center overflow-hidden" >
    <div className="flex flex-wrap w-[70%] text-center">
      <Link to='' className="w-[20%] h-[20%] ml-[2rem] mt-[4rem]">
      <div className="">
        <img src="" alt="" />
        <div className="">
        <h1>Socialize</h1>
        <p>Get to Know what's going on your campus</p>
        </div>
      </div>
      </Link>

      <Link to='' className="w-[20%] h-[20%] ml-[2rem] mt-[4rem]">
      <div className="">
        <img src="" alt="" />
        <div className="">
        <h1>Your Team</h1>
        <p>Either buid your own team or be a part of team whose members share same vision as yours 
        </p>
        </div>
      </div>
      </Link>

      <Link to='' className="w-[20%] h-[20%] ml-[2rem] mt-[4rem]">
      <div className="">
        <img src="" alt="" />
        <div className="">
        <h1>Travel And Vlog</h1>
        <p>We are here to assist the students of our campus to plan thier vacations</p>
        </div>
      </div>
      </Link>

      <Link to='' className="w-[20%] h-[20%] ml-[2rem] mt-[4rem]">
      <div className="">
        <img src="" alt="" />
        <div className="">
        <h1>Challenges</h1>
        <p>Find the problems that can be solved by you or your team and win prizes </p>
        </div>
      </div>
      </Link>

      <Link to='' className="w-[20%] h-[20%] ml-[2rem] mt-[4rem]">
      <div className="">
        <img src="" alt="" />
        <div className="">
        <h1>Academics</h1>
        <p>Exam season is coming?No worries we are here to help you</p>
        </div>
      </div>
      </Link>

    </div>
    <div className="flex flex-col justify-between items-center">
      <Link to='' className="font-bold border rounded-lg m-[2rem] p-4 bg-green-400 mb-[10rem]">Login</Link>
      <Link to='' className="font-bold border rounded-lg m-[2rem] p-4 bg-green-400 mt-[10rem]">Register</Link>
    </div>
   </div>
   
    </>
  )
}

export default LandingPage
