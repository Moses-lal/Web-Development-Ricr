import React from "react";
import { useState } from "react";
import api from "../config/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

const Login = () => {

  const {setuser , setIsLogin , setIsRecruiter} = useAuth();
  const navigate = useNavigate(); 

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading,setloading] = useState(true)

  const handlechange = (e) => {
    // const Name = e.target.name;
    // const Value = e.target.value;

    const { name, value } = e.target;

    setLoginData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    // console.log(loginData);
    setloading(true)

    try {

      const res = await api.post("/auth/login",loginData)
      toast.success(res.data.message)
      sessionStorage.setItem("userData", JSON.stringify(res.data.data));
      setIsLogin(true);
      setuser(res.data.data);
      setIsRecruiter(res.data.data.role === "recruiter");
      setLoginData({
      email: "",
      password:"",
    });
    res.data.data.role === "recruiter"
        ? navigate("/recruiterdashboard")
        : navigate("/userdash");

    } catch (error) {
      console.log(error);
      toast.error(
        `Error : ${error.response?.status} | ${error.response?.data?.message}`
      );
      
    } finally{
      setloading(false)
    }


  };

  return (
    <>
      <div className=" bg-gray-900 min-h-screen flex items-center justify-center">

        
        <div className="min-w-md border border-black  rounded-2xl  bg-white space-y-10 p-8">
          <h1 className="text-3xl text-center p-3 font-medium text-[var(--tertiary)]">Login to Portal </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-x-6"> 
              <label className="text-2xl text-black ">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handlechange}
                value={loginData.email}
                className="border border-blue-800 shadow-sm shadow-cyan-700 w-50 p-1"
                 placeholder="yourexample@.com"
              />
            </div>

            <div className="space-x-6">
              <label className="text-2xl text-black ">Password:</label>
              <input
                type="password"
                onChange={handlechange}
                value={loginData.password}
                name="password"
                className="border  border-blue-800 shadow-sm shadow-cyan-700 w-50 p-1"
                id="password"
                placeholder="*********"
              />
            </div>

            <button
              type="submit"
              className="border w-full rounded-2xl shadow p-3 text-blue-300 "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
