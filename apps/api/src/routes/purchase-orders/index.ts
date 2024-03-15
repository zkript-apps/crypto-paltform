import express from "express"
import {
  addPurchaseOrders,
  deletePurchaseOrder,
  getAllPurchaseOrders,
  getPurchaseOrder,
  updatePurchaseOrder,
} from "./default"
import { getPaginatedPurchaseOrders } from "./custom"

const router = express.Router()

// CUSTOM
router.get("/paginated", getPaginatedPurchaseOrders)

// DEFAULT
router.get("/", getAllPurchaseOrders)
router.get("/:id", getPurchaseOrder)
router.post("/", addPurchaseOrders)
router.patch("/update/:id", updatePurchaseOrder)
router.delete("/delete/:id", deletePurchaseOrder)

export default router
