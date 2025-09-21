import React from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

function Projects() {


  function left() {
    let currentloc = Number(
      document.getElementById("project2").style.marginLeft.split("px")[0]
    );

    if (currentloc === 0) return;

    currentloc += 400;

    document.getElementById("project2").style.marginLeft = currentloc + "px";
  }


  function right() {
    let currentloc = Number(
      document.getElementById("project2").style.marginLeft.split("px")[0]
    );

    if (currentloc === -2100) return;

    currentloc -= 400;

    document.getElementById("project2").style.marginLeft = currentloc + "px";
  }











  return (
    <>
      <div className="bg-dark  px-3 pb-5" id="project">
        <div className="bg-primary-subtle p-3 mx-2 rounded-4">
          <h3 className="fw-bolder fs-2 text-black">Featured Projects </h3>
        </div>

        <div
          className="border border-light text-white p-3 d-flex gap-5 overflow-hidden"
          id="project1"
        
        >


          <div className=" d-flex gap-5 rounded-3 " id="project2"   style={{ marginLeft: "-210" }}>


          <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/pro1.png"} width={"350px"} height={"300px"} />
            </div>
            <h4 className="fw-bold">Virtual Market Place - </h4>
            <p className="fs-6 fw-medium">
              a Market for Fresher To Start Earning And <br />
              Showcase Their Work <br />
              <span className="fs-5 fw-bold cont4">Made In MERN </span> <br />
              More Info- <br />- A platform for freelancers and clients to
              collaborate efficiently. - Integrated secure payment gateway,
              escrow system, real-time chat, and feedback system.
            </p>
          </div>

          <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/pro1.png"} width={"350px"} height={"300px"} />
            </div>
            <h4 className="fw-bold">Virtual Market Place - </h4>
            <p className="fs-6 fw-medium">
              a Market for Fresher To Start Earning And <br />
              Showcase Their Work <br />
              <span className="fs-5 fw-bold cont4">Made In MERN </span> <br />
              More Info- <br />- A platform for freelancers and clients to
              collaborate efficiently. - Integrated secure payment gateway,
              escrow system, real-time chat, and feedback system.
            </p>
          </div>

          <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/pro1.png"} width={"350px"} height={"300px"} />
            </div>
            <h4 className="fw-bold">Virtual Market Place - </h4>
            <p className="fs-6 fw-medium">
              a Market for Fresher To Start Earning And <br />
              Showcase Their Work <br />
              <span className="fs-5 fw-bold cont4">Made In MERN </span> <br />
              More Info- <br />- A platform for freelancers and clients to
              collaborate efficiently. - Integrated secure payment gateway,
              escrow system, real-time chat, and feedback system.
            </p>
          </div>

          <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/pro1.png"} width={"350px"} height={"300px"} />
            </div>
            <h4 className="fw-bold">Virtual Market Place - </h4>
            <p className="fs-6 fw-medium">
              a Market for Fresher To Start Earning And <br />
              Showcase Their Work <br />
              <span className="fs-5 fw-bold cont4">Made In MERN </span> <br />
              More Info- <br />- A platform for freelancers and clients to
              collaborate efficiently. - Integrated secure payment gateway,
              escrow system, real-time chat, and feedback system.
            </p>
          </div>

          <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/pro1.png"} width={"350px"} height={"300px"} />
            </div>
            <h4 className="fw-bold">Virtual Market Place - </h4>
            <p className="fs-6 fw-medium">
              a Market for Fresher To Start Earning And <br />
              Showcase Their Work <br />
              <span className="fs-5 fw-bold cont4">Made In MERN </span> <br />
              More Info- <br />- A platform for freelancers and clients to
              collaborate efficiently. - Integrated secure payment gateway,
              escrow system, real-time chat, and feedback system.
            </p>
          </div>

          <div className="border bg-gradient pro">
            <div className="mb-2">
              <img src={"/pro1.png"} width={"350px"} height={"300px"} />
            </div>
            <h4 className="fw-bold">Virtual Market Place - </h4>
            <p className="fs-6 fw-medium">
              a Market for Fresher To Start Earning And <br />
              Showcase Their Work <br />
              <span className="fs-5 fw-bold cont4">Made In MERN </span> <br />
              More Info- <br />- A platform for freelancers and clients to
              collaborate efficiently. - Integrated secure payment gateway,
              escrow system, real-time chat, and feedback system.
            </p>
          </div>

          </div>
          
        </div>

        <button onClick={left} id="left">
          <FaCircleChevronLeft />
        </button>
        <button onClick={right} id="right">
          <FaCircleChevronRight />
        </button>
      </div>
    </>
  );
}

export default Projects;
