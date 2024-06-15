import { useLoginMutation,useLogoutMutation } from "../../../redux/api/userApiSlice";
import { useState,useEffect } from "react"
import {useNavigate,Link,useLocation} from "react-router-dom"
import {toast} from "react-toastify"
import {setCredentials} from '../../../redux/features/auth/authSlice'
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("");

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [login,{isLoading}]=useLoginMutation();

const submitHandler=async(e)=>{
  e.preventDefault();
 try {
  const res=await login({email,password}).unwrap();
  dispatch(setCredentials({...res}));
  navigate('/');
 } catch (error) {
  toast.error(error);
 }
}
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
      <form onSubmit={submitHandler} className='container w-[100%]'>
        <div className="my-[2rem]">
            <label htmlFor='email' className='block text-sm font-medium text-white'>Email Address</label>
            <input type='email' id='email' className='mt-1 p-2 border  rounded w-full ' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            ></input>
        </div>

        <div className="my-[2rem]">
            <label htmlFor='password' className='block text-sm font-medium text-white'>Password</label>
            <input type='password' id='password' className='mt-1 p-2 border rounded w-full' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            ></input>
        </div>

        <button disabled={isLoading} type='submit' className='bg-pink-500 text-white py-2 px-4 rounded cursor-pointer my-[1rem]'>
          {isLoading?"Signing In......":"Sign In" }
        </button>

     

      </form>
    </>
  )
}

export default LoginPage
