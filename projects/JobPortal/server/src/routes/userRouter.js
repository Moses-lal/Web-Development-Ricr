import express from 'express'
import { UpdateProfile } from "../controller/usercontroller.js";
import { Protect } from "../middlewares/authmiddle.js";
import multer from 'multer'

const router = express.Router();
const upload = multer();

router.put("/update", Protect, UpdateProfile);

router.patch("/changephoto", Protect, upload.single("profilePicture"),changePhoto)

export default router;