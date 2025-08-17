import React from "react";

function Education() {
  return (
    <>
      <div className="container-fluid bg-primary-subtle " id="education">
        <h3 className='p-3 m-2 text-center fw-medium' >Education page</h3>

        <div className="d-flex gap-3">
        <div className="bg-danger-subtle text-dark p-4 w-50" id="edu">
        <div><h2>Madhav Institute of Technology and Science</h2></div>
        <div className="mb-3"> <h4> pursuing B.Tech in Computer Science and Engineering</h4></div>
        <div><h6> Gwalior, MP</h6></div>
        <div><h6>Nov 2022– May 2026</h6></div>
        </div>


        <div className=" border shadow w-50 p-3">
          <h4>Technical Skillset</h4>
          <hr />
          <div className="fs-5 "> <b>Programming Languages:</b> Java, Python, C++</div>
          <div className="fs-5 "> <b> Frontend:</b> HTML, CSS, JavaScript , React</div>
          <div className="fs-5 "> <b>Backend:</b> Spring Boot, Hibernate , ExpressJS</div>
          <div className="fs-5 "> <b> Databases: </b> MongoDB, MySQL</div>
          <div className="fs-5 "> <b> Tools: </b>IntelliJ, NetBeans, VScode</div>

        </div>
        </div>
       
       

      </div>
    </>
  );
}

export default Education;
