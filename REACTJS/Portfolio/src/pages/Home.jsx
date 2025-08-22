import React from "react";
import moses from "../assets/moses.jpg";

const Home = () => {
  return (
    <>
      <div>
        <div className="w-full h-screen bg-[url('/hero.jpg')] bg-contain bg-start  ">
         <div className="w-179 h-180 bg-[#5c200c] mx-110 p-5 " > 
          <div className="flex gap-20">
            <h2 className="text-4xl font-bold text-amber-50 mt-8 ms-5"> Hello, <br />I m <span className="text-blue-900 font-extrabold">Moses Lal</span>  </h2>
            <div className="w-70 h-70 border rounded-full mt-1 ">
              <img src={moses} className="object-cover w-70 h-70 rounded-full object-top shadow-2xl shadow-amber-200 border-4 border-b-cyan-800 border-s-cyan-800 border-e-red-900 border-t-red-900" />
            </div>
          </div>
            <h3 className="text-xl text-white">I' M a Full Stack Web Developer</h3>
            
         </div>
        </div>
      </div>
    </>
  );
};

export default Home;
