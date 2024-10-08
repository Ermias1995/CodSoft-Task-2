import { useState } from "react"
import { Link, NavLink } from "react-router-dom";
import {FaBars, FaXmark} from "react-icons/fa6"

function Navbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const handleToggler = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
      {path:"/",title:"Start a search"},
      {path:"/my-jobs",title:"My Jobs"},
      {path:"/salary",title:"Salary"},
      {path:"/post-job",title:"Post a Job"}
    ]
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-6">
            <a href="/" className="flex items-center gap-2 text-2xl text-black">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 height="29" 
                 width="30" 
                 viewBox="0 0 576 512">
                <path fill="#FFD43B" d="M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2l-256 0c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7l32 0 22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-74.9-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"/></svg>
              Shekela
            </a>
            <ul className="hidden md:flex gap-12">
             {navItems.map(({path,title})=>(
              <li key={path} className="text-base text-gray-800">
                <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                  >
                    {title}
                </NavLink>
              </li>
             ))}
            </ul>

            <div className="text-base text-gray-800 font-medium space-x-5 hidden lg:block">
              <Link to="/login" className="py-2 px-5 border rounded bg-secondary text-white">Login</Link>
              <Link to="/sign-up" className="py-2 px-5 border rounded bg-secondary text-white">Sign up</Link>
            </div>

            {/* Design for mobile */}
            <div className="md:hidden block">
              <button onClick={handleToggler}>
                {
                  isMenuOpen ? <FaXmark className="w-5 h-5 text-black"/>: <FaBars className="w-5 h-5 text-black"/>
                }
                
              </button>
            </div>
        </nav>

        {/* nav items for mobile */}
        <div className={`px-4 bg-secondary py-5 rounded-sm ${isMenuOpen ? "": "hidden"}`}>
          <ul>
          {navItems.map(({path,title})=>(
              <li key={path} className="text-base text-white">
                <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                  >
                    {title}
                </NavLink>
              </li>
             ))}
              <li className="text-white py-1"><Link to="/login">Login</Link></li>
          </ul>
        </div>
    </header>
  )
}
export default Navbar