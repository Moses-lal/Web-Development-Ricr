import jwt from "jsonwebtoken";
import User from "../models/userModel";

export const LoginCheck = async (req, res, next) => {
  try {
    // console.log("Cookies: ", req.cookies);
    // console.log("Headers: ", req.headers.authorization);

    const token =
      req.cookies?.hideandseek || req.headers.authorization?.split("")[1];

    console.log("token : ", token);

    const decode =  jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decode);

    const matchUser = await User.findById(decode.id);
    if (!matchUser) {
      const error = new Error("Session Expired. Please Login Again");
      error.statusCode = 404;
      return next(error);
    }

    req.user = matchUser;
    next();
  } catch (error) {
    res.status(401).json({ message: "please login frist" });
  }
};
