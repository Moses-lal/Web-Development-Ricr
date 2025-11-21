import React from "react";
import moses from "../assets/moses.jpg";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-blue-400">
        
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.5),rgba(0,0,0,0.7))]"
        >
          About
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-6 ">
          <h1 className="text-4xl text-white"> I'm a <span className="text-blue-400">Web Developer</span></h1>

          <p className="mt-4 text-lg md:text-2xl text-white/90">
            Full-Stack • React.js • Node.js • TailwindCSS
          </p>

           <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500/90 hover:bg-blue-600 text-white rounded-md font-medium shadow-md"
            >
              See Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/30 text-white rounded-md hover:bg-white/5"
            >
              Contact
            </a>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Home;
