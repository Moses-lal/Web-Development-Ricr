import React from "react";

function Projects() {
  return (
    <>
     <div id="project">
       <h3 className="bg-primary-subtle p-3 m-2">Project page </h3>
     </div>
     
      <div className="bg-dark-subtle p-3">
        <div className="fs-5 fw-medium my-3 mx-2">
          {" "}
          <b>Invoice Billing System (HTML, CSS, JS, Express.js) </b> <br />-
          Developed a web-based invoice billing system using Express.js backend{" "}
          <br />- Implemented secure authentication, invoice tracking, and
          automated email notifications <br />- Designed an intuitive UI for
          easy invoice generation{" "}
        </div>
        <div className="fs-5 fw-medium my-3 mx-2 ">
          <b>Virtual Marketplace for Freelancers (MERN Stack)</b> <br />- Built
          a platform for freelancers and clients to collaborate efficiently{" "}
          <br />- Integrated secure payment gateway, escrow system, real-time
          chat, and feedback system <br />- Used MERN stack for scalable
          performance and security
        </div>
        <div className="fs-5 fw-medium my-3 mx-2 ">
          <b>Real-Time Chat Application (using socket-io)</b> <br />- Uses
          WebSockets for persistent, bidirectional connections, enabling instant
          message delivery without repeated HTTP requests. <br />- Supports
          multiple concurrent users and chat rooms with efficient event handling
          on both client and server. <br />
          - Can include typing indicators, message read receipts, and real-time
          presence updates to enhance user engagement.
        </div>
      </div>
    </>
  );
}


export default Projects;
