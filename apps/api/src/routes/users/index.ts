import express from "express"
import { addUser, getAllUsers, getUser, updateUser } from "./default"

const router = express.Router()

// DEFAULT
router.get("/", getAllUsers)
router.get("/:id", getUser)
router.post("/", addUser)
router.patch("/update/:id", updateUser)

export default router
