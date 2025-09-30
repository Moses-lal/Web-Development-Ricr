import express from "express"
import { change, remove, update } from "../controller/user.js"

const router = express.Router()


router.put("/update",update)

router.patch("/change",change)

router.delete("/delete", remove)

// router.post("/update",forget)


export default router;