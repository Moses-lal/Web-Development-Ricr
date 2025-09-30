import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genauthtoken } from "../utils/token.js";

export const Register = async (req, res, next) => {
  try {
    const { email, password, fullname } = req.body;

    if (!email || !password || !fullname) {
      const error = new Error("all fileds are required");
      error.statusCode = 400;
      return next(error);
    }

    const existinguser = await User.findOne({ email });
    if (existinguser) {
      const error = new Error("email already exits ");
      error.statusCode = 409;
      return next(error);
    }

    const hashedpassword = bcrypt.hash(password, 10);
    const newuser = await User.create({
      fullname,
      email,
      password: hashedpassword,
    });

    res
      .status(200)
      .json({ message: `welcome ${newuser.fullname} to backend ` });
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("all fileds are required");
      error.statusCode = 400;
      return next(error);
    }

    //chechking user existence in db
    const existinguser = await User.findOne({ email });
    if (!existinguser) {
      const error = new Error("you need to register frist");
      error.statusCode = 401;
      return next(error);
    }

    const match = await bcrypt.compare(password, existinguser.password);
    if (!match) {
      const error = new Error("pasword does not match please check ");
      error.statusCode = 401;
      return next(error);
    }

    //generate token and send cookie
    await genauthtoken(existinguser, res);

    res.status(200).json({ message: "User login succesfull!! " });
  } catch (error) {
    next(error);
  }
};

export const Logout = (req, res) => {
  try {
    res.clearcookie("hideandseek", { maxAge: 0 });
    res.status(200).json({ message: " logout succesful " });
  } catch (error) {
    next(error);
  }
};

export const ForgetPassword = (req, res) => {
  res.status(200).json({ message: "ok let see what we can do " });
};
