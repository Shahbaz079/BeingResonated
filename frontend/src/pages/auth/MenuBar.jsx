import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../../redux/api/userApiSlice";
import { logout } from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


const MenuBar = () => {
const dispatch=useDispatch();
const navigate=useNavigate();

  const [menuBarOpen,setMenuBarOpen]=useState(false);

  const toggle=()=>{
    setMenuBarOpen(!menuBarOpen);
  }
const [logoutApiCall]=useLogoutMutation();


const logoutHandler=async()=>{
  try {
    await logoutApiCall().unwrap();
        dispatch(logout());
        navigate('/');
        toast.success("Loged Out Successfully")
  } catch (error) {
    console.error(error)
  }
}
  return (
    <div className="mt-[1rem] fixed" >
      <button className={menuBarOpen?" w-[1.5rem] transition-transform rotate-90":""} onClick={toggle} >
        <div >
        <div className="w-6 h-0.5 bg-white my-1"></div>
        <div className="w-6 h-0.5 bg-white my-1"></div>
        <div className="w-6 h-0.5 bg-white my-1"></div>

        </div>
      </button>

      {menuBarOpen && (
        <section className="bg-blue-500 w-[120%] flex justify-center p-1 flex-wrap items-center rounded-lg" >
          <ul>
            <li>
              <Link to='/logout' onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          </ul>
        </section>
      )}
    </div>
  )
}

export default MenuBar
