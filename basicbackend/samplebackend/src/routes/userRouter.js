import express from "express";
import { Update, ChangePass, Delete } from "../controller/userController.js";
import { LoginCheck } from "../middlewares/authmid.js";

const router = express.Router();

router.put("/update", LoginCheck, Update);

router.patch("/changepass", ChangePass);

router.delete("/delete", Delete);

export default router;
