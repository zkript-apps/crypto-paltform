import mongoose from "mongoose"
const { Schema } = mongoose

const purchaseOrders = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "Organisations",
  },
  email: {
    type: String,
    required: true,
  },
  amountMoney: {
    type: Number,
    required: true,
  },
  tokenCurrentPrice: {
    type: Number,
    required: true,
  },
  estimatedTokenAmount: {
    type: Number,
    required: true,
  },
  wireReferenceId: {
    type: String,
    required: false,
  },
  walletId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  deletedAt: Date,
})

export default mongoose.model("PurchaseOrders", purchaseOrders)
