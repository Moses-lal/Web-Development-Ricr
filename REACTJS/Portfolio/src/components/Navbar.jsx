import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
     <>
  
  <div className="bg-black/50 backdrop-blur-sm p-2 fixed top-0 left-0 right-0 z-99 flex items-center justify-around">
    
    <div className="mr-100">
      <img src={'./logo2.png'} className="w-20 h-20 object-fill" />
    </div>

    <div className="flex text-white space-x-10 font-medium text-lg">
      <Link to={"/"}>Home</Link>
      <Link to={"/About"}>About</Link>
      <Link to={"/Projects"}>Projects</Link>
      <Link to={"/Contact Me"}>Contact Me</Link>
      <Link to={"/Academics"}>Academics</Link>
    </div>
    
  </div>

  
  </>
  )
 
}

export default Navbar;
