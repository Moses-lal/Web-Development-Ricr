import bcrypt from "bcrypt";
import user from "../models/usermodels.js";
import { genauthtoken } from "../utils/token.js";

export const register = async (req, res, next) => {
  try {
    const { email, password, phone, fullname } = req.body;

    if (!email || !password || !phone || !fullname) {
      const error = new Error("all fields required ");
      error.statuscode = 400;
      return next(error);
    }

    const existinguser = await user.findone({ email });
    if (existinguser) {
      const error = new Error("already exitss");
      error.statuscode = 409;
      return next(error);
    }

    const photo = `https://placehold.co/600x400?text=${fullname
      .charAt(0)
      .toUpperCase()}`;

    const hashedpassword = await bcrypt.hash(password, 10);

    const newuser = await user.create({
      fullname,
      email,
      phone,
      photo,
      password: hashedpassword,
    });

    res
      .status(201)
      .json({ message: `Welcome to JobPortal ${newuser.fullName}` });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res, next) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("all fields required ");
      error.statuscode = 400;
      return next(error);
    }


    const existinguser = await user.findone({ email });
    if (!existinguser) {
      const error = new Error("you need to register frist ");
      error.statuscode = 401;
      return next(error);
    }


    const match = await bcrypt.compare(
      password,
      existinguser.password
    );

    if (!match) {
      const error = new Error("password does not match ");
      error.statuscode = 401;
      return next(error);
    }



    if(!genauthtoken(existinguser,res)){
      const error = new Error("token creation error");
      error.statuscode = 403;
      return next(error);
    }

    res.status(200).json({ message: `Welcome Back ${existinguser.fullname}` , data:existinguser});
  } catch (error) {
    next(error);
  }
};


export const logout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "login succesful " });
  } catch (error) {
    next(error);
  }
};
