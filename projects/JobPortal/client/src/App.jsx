import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs"
import Login from "./pages/Login";
import Register from "./pages/Register"
import Userdash from "./pages/userdash";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <BrowserRouter>
       <Toaster/>
        <Navbar />
        <Routes>

          <Route path={"/"}  element = {<Home/>}/>
          <Route path={"/about"}  element = {<About/>}/>
          <Route path={"/contact"}  element = {<Contact/>}/>
          <Route path={"/jobs"}  element = {<Jobs/>}/>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/userdash"} element={<Userdash />} />


        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
