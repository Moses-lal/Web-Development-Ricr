import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;

    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isvalid = true;
    const err = {};

    if (registerData.fullName.length < 3) {
      err.fullName = " Name Should be of atleast 3 character ";
      isvalid = false;
    }

    if (!/^[A-Za-z ]+$/.test(registerData.fullName)) {
      err.fullName = "Only Alphabets are allowed";
      isvalid = false;
    }

    if (
      !/^[A-Za-z\d._]+@gmail.com$/.test(registerData.email) ||
      registerData.email.length < 10
    ) {
      err.email = "Please enter a correct mail ";
      isvalid = false;
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(
        registerData.password
      )
    ) {
      err.password = "Please choose a Strong Password";
      isvalid = false;
    }
    if (registerData.password !== registerData.confirmPassword) {
      err.confirmPassword = "password is not match  ";
      isvalid = false;
    }

    setError(err);

    return isvalid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    if (!validate()) {
      setLoading(false);
      toast.error("please solve the error ");
      return;
    }

    // setTimeout(() => {
    //   console.log(registerData);
    //   setRegisterData({
    //     fullName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    //   setLoading(false);
    //   toast.success("registration successfull")
    // }, 2000);

    try {
      const res = await api.post("/auth/register", registerData);
      toast.success(res.data.message);

      setRegisterData({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/login");
    } catch (error) {
      console.log("error in registering ", error);
      toast.error(
        `Error : ${error.response?.status} | ${error.response?.data?.messsage} `
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" bg-gray-900 min-h-screen flex items-center justify-center">

        <div className="min-w-md bg-white rounded-2xl p-8 space-y-10 ">
          <h1 className="text-blue-800 text-2xl text-center font-medium"> Register </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="space-x-6">
                <label className="text-2xl">FullName:</label>
                <input
                  type="name"
                  id="fullName"
                  name="fullName"
                  className="border p-1"
                  onChange={handlechange}
                />
              </div>
              {error.fullName && (
                <p className="text-red-500 text-sm mt-1 mx-15">
                  {error.fullName}
                </p>
              )}
            </div>

            <div>
              <div className="space-x-6">
                <label className="text-2xl">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border p-1"
                  onChange={handlechange}
                />
              </div>
              {error.email && (
                <p className="text-red-500 text-sm mt-1 mx-15">{error.email}</p>
              )}
            </div>

            <div>
              <div className="space-x-6">
                <label className="text-2xl">Password:</label>
                <input
                  type="password"
                  className="border p-1"
                  id="password"
                  name="password"
                  onChange={handlechange}
                />
              </div>
              {error.password && (
                <p className="text-red-500 text-sm mt-1 mx-15">
                  {error.password}
                </p>
              )}
            </div>

            <div>
              <div className="space-x-6">
                <label className="text-2xl">Confirm Password:</label>
                <input
                  type="password"
                  className="border p-1"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handlechange}
                />
              </div>
              {error.confirmPassword && (
                <p className="text-red-500 text-sm mt-1 mx-15">
                  {error.confirmPassword}
                </p>
              )}
            </div>

            <div>
              <div className="space-x-6">
                <label htmlFor="phone" className="text-2xl">phone:</label>
                <input
                  type="name"
                  id="phone"
                  name="phone"
                  className="border p-1"
                  onChange={handlechange}
                />
              </div>
              {error.phone && (
                <p className="text-red-500 text-sm mt-1 mx-15">
                  {error.phone}
                </p>
              )}
            </div>

            <button type="submit" className="border w-full p-3 rounded-2xl">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
