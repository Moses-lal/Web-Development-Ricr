import express from "express";
import { Update, ChangePass, Delete } from "../controller/userController";
import { LoginCheck } from "../middlewares/authmid";

const router = express.Router();

router.put("/update", LoginCheck, Update);

router.patch("/changepass", ChangePass);

router.delete("/delete", Delete);

export default router;
