import React from "react";

function Navbar() {
  return (
    <>
    
        <div className="container-fluid bg-primary-subtle text-center p-3 d-flex align-items-center justify-content-between">
          <h2>
            My Portfolio
          </h2>

          <div className="d-flex gap-3">
          <a href="#about" className="text-decoration-none text-success fs-5">About</a>
          <a href="#education" className="text-decoration-none text-success fs-5">Education</a>
          <a href="#certification" className="text-decoration-none text-success fs-5">Certification</a>
          <a href="#project" className="text-decoration-none text-success fs-5">Project</a>
          <a href="#contact" className="text-decoration-none text-success fs-5">Contact Me</a>
          </div>
        </div>

       
      
    </>
  );
}

export default Navbar;
