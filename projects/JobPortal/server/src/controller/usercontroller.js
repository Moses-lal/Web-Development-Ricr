import cloudinary from 'cloudinary'
import user from '../models/usermodel.js'



export const UpdateProfile = async (req, res, next) => {
  try {
    const {
      fullName,
      skills,
      qualification,
      dob,
      phone,
      exp,
      address,
      bio,
      linkedin,
      github,
      insta,
      twitter,
      gender,
    } = req.body;

    const currentUser = req.user;

    if (
      !fullName ||
      !phone ||
      !gender ||
      !dob ||
      !qualification ||
      !exp ||
      !address ||
      !bio ||
      !linkedin ||
      !github ||
      !insta ||
      !twitter ||
      !skills
    ) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    currentUser.fullName = fullName;
    currentUser.phone = phone;
    currentUser.gender = gender;
    currentUser.dob = dob;
    currentUser.qualification = qualification;
    currentUser.exp = exp;
    currentUser.address = address;
    currentUser.bio = bio;
    currentUser.linkedin = linkedin;
    currentUser.github = github;
    currentUser.insta = insta;
    currentUser.twitter = twitter;
    currentUser.skills = skills;

    const updatedUser = await currentUser.save();

    res.status(200).json({
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};


export const changephoto = async(req, res, next)=>{
  
  try {

    console.log("changing phhto ");
    
    const currentUser = req.user;

    const dp = req.file;

    

    if (!dp) {
      const error = new Error("Profile picture is required");
      error.statusCode = 400;
      return next(error);
    }


    if (currentUser.photoid !== "N/A") {
      await cloudinary.uploader.destroy(currentUser.photoid);
    }

    const b64 = Buffer.from(dp.buffer).toString("base64");
    const dataUri = `data:${dp.mimetype};base64,${b64}`;

    console.log(dataUri.slice(0, 100));

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "job-portal",
      width: 500,
      height: 500,
      crop: "fill",
    });
    console.log("File uploaded successfully:", result);
    currentUser.photo = result.secure_url;
    currentUser.photoid = result.public_id;

    const updatedUser = await currentUser.save();

    res.status(200).json({
      message: "Profile picture updated successfully",
      data: updatedUser,
    });

    
  } catch (error) {
    next(error)
  }
}




































