import React from "react";
import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    // const Name = e.target.name;
    // const Value = e.target.value;

    const { name, value } = e.target;

    setLoginData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData);

    setLoginData({
      email: "",
      password:"",
    });
  };

  return (
    <>
      <div className=" bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="min-w-md border rounded-2xl shadow bg-white space-y-10 p-5">
          <h1 className="text-3xl text-center">Login to Portal </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handlechange}
                value={loginData.email}
                className="border"
                 placeholder="yourexample@.com"
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                onChange={handlechange}
                value={loginData.password}
                name="password"
                className="border"
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
