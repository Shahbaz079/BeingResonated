import { useState,useEffect } from "react"
import { Link,useLocation,useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useRegisterMutation,useUploadimageMutation } from "../../../redux/api/userApiSlice.js"
import { useDispatch,useSelector } from "react-redux"

import { setCredentials } from "../../../redux/features/auth/authSlice.js"

const Registration = () => {
const [username,setUsername]=useState('');
const [email,setEmail]=useState("");
const[password,setPassword]=useState('');
const [confirmPassword,setConfirmPassword]=useState('');
const [image,setImage]=useState("");

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [register,{isLoading}]=useRegisterMutation();
  const [uplaodimage]=useUploadimageMutation();
 

  
  

  const  handleSubmit=async (e)=>{
    e.preventDefault()
    
   

    if (password!==confirmPassword){
      toast.error("Passwords do not match")
    }else{
      try {
        const res=await register({username,email,password,image}).unwrap();
        
        dispatch(setCredentials({...res}));

        navigate('/');
        toast.success(`Congrats ${username}, You are now part of our Being Resonated Family`)

      } catch (error) {
        console.log(error);
        toast.error(error?.data?.message||error.message)
      }
    }




  }

  const uploadFileHandler=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("image",e.target.files[0]);

    try {
      const res=await uplaodimage(formData).unwrap();
      toast.success(res.message);
      console.log(res.image);
      setImage(res.image);
    } catch (error) {
      toast.error(error?.data?.message ||error.error );
    }

  }

  return (
    <>
      <div className="container overflow-hidden h-[100vh] w-[100vw] flex flex-row" >
        <div className="w-[50vw] flex flex-col">
          <div className="font-bold p-4 m-3 text-center">Register</div>

          <form className="w-[95%] ml-4" onSubmit={handleSubmit}>
          <div className="my-[2rem] ">
            <label htmlFor="username" className="block text-sm font-medium text-white">Name</label>
            <input type="text" id="username" className="mt-1 p-2 border rounded w-full"
            placeholder="Enter Your Name" value={username} onChange={
              (e)=>setUsername(e.target.value)
            }/>
          </div>

          <div className="my-[2rem] ">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input type="email" id="email" className="mt-1 p-2 border rounded w-full"
            placeholder="Enter Your Email" value={email} onChange={
              (e)=>setEmail(e.target.value)
            }/>
          </div>


          <div className="my-[2rem] ">
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input type="password" id="password" className="mt-1 p-2 border rounded w-full"
            placeholder="Enter Your Password" value={password} onChange={
              (e)=>setPassword(e.target.value)
            }/>
          </div>

          <div className="my-[2rem] ">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirm Password</label>
            <input type="password" id="confirmPassword" className="mt-1 p-2 border rounded w-full"
            placeholder="Confirm Your Password" value={confirmPassword} onChange={
              (e)=>setConfirmPassword(e.target.value)
            }/>
          </div>


            <button type="submit" className=" p-4 bg-pink-500 rounded-lg" 
            disabled={isLoading}
            >
              {isLoading?"Registering":"Register"}
              </button>

          </form>
        </div>
        <div className="animation w-[50vw] flex flex-wrap justify-center items-center overflow-hidden">

              {
                image && (
                  <img src={image} alt="display picture" className="block mx-4 max-w-[70%] rounded-lg"/>
                )
              }

              <div className="mb-2">
              <label className="border text-white px-4 block w-full text-center rounded-lg cursor-pointer  py-4">
                {image?image.name:"Upload Profile Picture"}
                <input type="file" 
                name="image"
                accept="image/*"
                onChange={uploadFileHandler}
                className={!image?"hidden":"text-white"}
                />
              </label>
              </div>
        </div>
      </div>
    </>
  )
}

export default Registration
