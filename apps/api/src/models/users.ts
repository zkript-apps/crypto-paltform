import mongoose from "mongoose"
const { Schema } = mongoose

const users = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  walletId: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["User", "Admin"],
    required: true,
  },
  blockedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
})

export default mongoose.model("Users", users)
