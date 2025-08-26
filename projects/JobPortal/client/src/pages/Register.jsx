import React, { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    FullName: "",
    email: "",
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

    if (registerData.FullName.length < 3) {
      err.FullName = " Name Should be of atleast 3 character ";
      isvalid = false;
    }

    if (!/^[A-Za-z ]+$/.test(registerData.FullName)) {
      err.FullName = "Only Alphabets are allowed";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!validate()) {
      setLoading(false);
      toast.error("please solve the error ")
      return;
    }

    setTimeout(() => {
      console.log(registerData);
      setRegisterData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setLoading(false);
      toast.success("registration successfull")
    }, 2000);
  };

  return (
    <>
      <div className=" bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="min-w-md bg-white rounded-2xl space-y-10">
          <h1 className="text-blue-800 text-2xl text-center"> Register </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div>
              <label htmlFor="FullName">FullName:</label>
              <input
                type="name"
                id="FullName"
                name="FullName"
                className="border"
                onChange={handlechange}
              />
            </div>
            {error.FullName && ( <p className="text-red-500 text-sm mt-1 mx-15">{error.FullName}</p> )}
            </div>
            
            <div>
              <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border"
                onChange={handlechange}
              />
            </div>
             {error.email && ( <p className="text-red-500 text-sm mt-1 mx-15">{error.email}</p> )}
            </div>
            
            <div>
              <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="border"
                id="password"
                name="password"
                onChange={handlechange}
              />
            </div>
             {error.password && ( <p className="text-red-500 text-sm mt-1 mx-15">{error.password}</p> )}
            </div>
            
            <div>
              <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                className="border"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handlechange}
              />
            </div>
              {error.confirmPassword && ( <p className="text-red-500 text-sm mt-1 mx-15">{error.confirmPassword}</p> )}
            </div>
            

            <button type="submit" className="border w-full p-3 rounded-2xl">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
