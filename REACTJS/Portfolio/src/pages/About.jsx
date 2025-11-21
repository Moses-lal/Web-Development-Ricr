import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden ">
        <video
          src="/portfolio3.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.2),rgba(0,0,0,0.7))]">About</div>
      </div>
    </>
  );
};

export default About;
