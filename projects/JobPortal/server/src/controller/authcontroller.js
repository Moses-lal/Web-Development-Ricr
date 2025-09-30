import bcrypt from "bcrypt";
import user from "../models/usermodels.js";

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
      .json({ message: `Welcome to JobPortal ${newUser.fullName}` });
  } catch (error) {
    console.log(error);
  }
};
