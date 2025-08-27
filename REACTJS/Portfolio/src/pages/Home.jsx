import React from "react";
import moses from "../assets/moses.jpg";

const Home = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[url('/hero.jpg')] bg-contain bg-start  ">
        <div className="w-179 h-180 bg-[#642611]  mx-110 p-5 relative ">
          <div className="flex gap-20">
            <h2 className="text-4xl font-bold text-amber-50 mt-8 ms-5">
              {" "}
              Hello, <br />I m{" "}
              <span className="text-blue-800 text-shadow-2xs text-shadow-cyan-100 font-extrabold">
                Moses Lal
              </span>{" "}
            </h2>
            <div className="w-70 h-70 border rounded-full mt-1 ">
              <img
                src={moses}
                className="object-cover w-70 h-70 rounded-full object-top shadow-2xl shadow-blue-600 border-4 border-b-cyan-800 border-s-cyan-800 border-e-red-900 border-t-red-900"
              />
            </div>
          </div>
          <div className="text-xl font-medium text-white absolute top-48 left-10">
            I' M a Full Stack Web Developer <br />
            
           <span className="text-2xl m"> Comfort Technologies </span>
            <div className="flex flex-col gap-3">
              <span>MongoDB</span>
               <span>React.js</span>
           <span>Node.js</span>
           <span>Express.js</span>
           <span>TailwindCSS</span>
           <span>JavaScript</span>
            </div>
          
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
