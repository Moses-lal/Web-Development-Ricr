import bcrypt from "bcrypt";

export const Update = async (req, res,next) => {
  try {
    const { fullname } = req.body;

    if (!fullname) {
      const error = new Error("please enter name in Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    const currentuser = req.user;

    currentuser.fullname = fullname;

    await currentuser.save();

    res.status(200).json({ message: "the information is updated " });
  } catch (error) {
    next(error);
  }
};

export const ChangePass = async (req, res,next) => {
  try {
    const { password } = req.body;
    if (!password) {
      const error = new Error("please enter password in the fiedls");
      error.statusCode = 400;
      return next(error);
    }

    const currentuser = req.user;

    const hashedpassword = await bcrypt.hash(password, 10);

    currentuser.password = hashedpassword;

    await currentuser.save();

    res.status(200).json({ message: "patch comand " });
  } catch (error) {
    next(error);
  }
};

export const Delete = async (req, res,next) => {
    try {
    
        res.clearcookie("hideandseek",{maxAge:0});

        const currentuser = req.user;

        await currentuser.deleteone({ email: currentuser.email})


        res.status(204).json({ message: "the information is deleted " });
        
    } catch (error) {
        next(error)
    }
};
