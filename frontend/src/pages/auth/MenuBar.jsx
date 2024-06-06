import { useState } from "react"
import { Link } from "react-router-dom";

const MenuBar = () => {

  const [menuBarOpen,setMenuBarOpen]=useState(false);

  const toggle=()=>{
    setMenuBarOpen(!menuBarOpen);
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
              <Link to=''>
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
