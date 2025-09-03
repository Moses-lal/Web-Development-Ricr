import React from "react";

function Education() {
  return (
    <>
      <div className="container-fluid bg-dark  " id="education">

        <h3 className='p-3 text-center text-white fw-medium' >Education </h3>

<div className="d-flex gap-5">
        <div className="">
          
        <div className=" p-4 rounded-4  mb-3 " id="edu">
        <div><h2>Secondary School - Class 10<sup>th</sup> </h2></div>
        <div> <h3> From St. Montfort School </h3></div>
         <div><p className="fs-5 fw-medium"> Percentage - 72%</p></div>
        <div><p className="fs-5 fw-medium"> Patel Nagar ,Bhopal</p></div>
        <div><p className="fs-6 fw-medium" >From 2019 –  2020</p></div>
        </div>

         <div className=" p-4 rounded-4  mb-3 " id="edu">
        <div><h2>Higher Secondary School - Class 12<sup>th</sup> </h2></div>
        <div> <h3> From St. Montfort School </h3></div>
         <div><p className="fs-5 fw-medium"> Through PCM Stream</p></div>
         <div><p className="fs-5 fw-medium"> Percentage - 60%</p></div>
        <div><p className="fs-5 fw-medium"> Patel Nagar ,Bhopal</p></div>
        <div><p className="fs-6 fw-medium" >From 2021 – 2022</p></div>
        </div>


        <div className=" p-4 rounded-4 mb-3 " id="edu">
        <div><h2>Madhav Institute of Technology and Science</h2></div>
        <div className="mb-3"> <h4> pursuing B.Tech in Computer Science and Engineering</h4></div>
        <div><h6> Gwalior, MP</h6></div>
        <div><h6>Nov 2022– May 2026</h6></div>
        </div>

        </div>

        <div className=" text-white border h-100  w-50 p-3" id="tech">
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
