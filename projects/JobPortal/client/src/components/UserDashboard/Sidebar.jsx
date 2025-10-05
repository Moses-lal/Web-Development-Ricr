import React from "react";
import overview from "./overview";
import { FcHome, FcManager, FcDocument } from "react-icons/fc";

const navitems = [
  { value: "overview", text: "Overview", icons: <FcHome /> },
  { value: "profile", text: "Profile", icons: <FcManager /> },
  { value: "application", text: "Application", icons: <FcDocument /> },
];

const Sidebar = ({ active, setActive }) => {
  return (
    <>
      <div className="bg-gradient-to-b from-[var(--primary)]  to-[var(--secondary)] h-full p-2 flex flex-col justify-between">

        <div>

           <h2 className="text-3xl border-b-2 border-white p-5 text-center text-[var(--text)]  font-bold">
          User DashBoard
        </h2>

        <div>
          <ul className="p-5 space-y-5">
            {navitems.map((item, idx) => (
              <li
                key={idx}
                className={` text-xl flex gap-2 items-center p-3 border border-[var(--background)] rounded-lg ${
                  active == item.value
                    ? "bg-[var(--tertiary)] font-medium"
                    : "hover: text-[var(--tertiary)] hover:text-[var(--text)]"
                } `}
                onClick={() => setActive(item.value)}
              >
                {item.icons} {item.text}
              </li>
            ))}
          </ul>
        </div>

        </div>
       
        <div className="border-t-2 border-[var(--background)] text-center p-4 ">
          <button className="border border-[#c589e8] bg-[var(--primary)] py-3 px-5 rounded-lg font-bold text-white shadow-md shadow-[#c589e8]">logout</button>
        </div>








        
      </div>
    </>
  );
};

export default Sidebar;
