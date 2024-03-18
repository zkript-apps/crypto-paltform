import express from "express"
import { addUser, getAllUsers, getUser, updateUser, getUserByEmail } from "./default"

const router = express.Router()

// DEFAULT
router.get("/", getAllUsers)
router.get("/:id", getUser)
router.get("/email/:email", getUserByEmail)
router.post("/", addUser)
router.patch("/update/:id", updateUser)

export default router
