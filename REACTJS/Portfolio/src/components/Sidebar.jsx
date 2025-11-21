import React from "react";
import {Link} from "react-router-dom"
 
const Sidebar = () => {
  return( 
  
  <>
  <div className=" border w-3/14">

     <div className="flex flex-col gap-4 p-2 text-center min-h-screen ">
       <Link to={"/"}> home</Link>
       <Link to={"/about"}>About</Link> 
       <Link to={"/education"}>Eduction</Link>
       <Link to={"/project"}>Project</Link>
       <Link to={"/contact"}>Contact</Link>
      
     </div>
     
    </div>
  </>
  )
  
};

export default Sidebar;
