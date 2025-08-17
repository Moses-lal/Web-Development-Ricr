import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ContactMe from './components/ContactMe';





function app(){
  return(
    <>
    {/* your html code */}
  
    <Navbar/>
    <About/>
    <Education/>
    <Projects/>
    <Certifications/>
    <ContactMe/> 
    </>
    
  )
}


export default app;
