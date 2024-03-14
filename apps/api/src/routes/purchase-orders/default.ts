import { Request, Response } from "express"
import PurchaseOrders from "@/models/purchaseOrders"
import {
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
  USER_NOT_EXIST,
} from "@/common/constants/messages"
import {
  PURCHASE_ORDER_ADDED,
  PURCHASE_ORDER_NOT_EXIST,
  SUCCESS_DELETE,
  SUCCESS_UPDATE,
  USER_SUCCESS_REGISTER,
} from "@/common/constants"

export const getAllPurchaseOrders = async (req: Request, res: Response) => {
  try {
    const purchaseOrdersCounts = await PurchaseOrders.find({
      deletedAt: { $exists: false },
    }).countDocuments()
    const getAllPurchaseOrders = await PurchaseOrders.find({
      deletedAt: { $exists: false },
    }).sort({ createdAt: -1 })
    res.json({
      error: false,
      items: getAllPurchaseOrders,
      itemCount: purchaseOrdersCounts,
      message: null,
    })
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: message,
    })
  }
}

export const getPurchaseOrder = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const getPurchaseOrder = await PurchaseOrders.findOne({
      _id: id,
      deletedAt: { $exists: false },
    })
    if (getPurchaseOrder) {
      res.json({
        error: false,
        item: getPurchaseOrder,
        message: null,
      })
    } else {
      res.json({
        error: false,
        item: null,
        message: PURCHASE_ORDER_NOT_EXIST,
      })
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
    res.json({
      error: true,
      item: null,
      message: message,
    })
  }
}

export const addPurchaseOrders = async (req: Request, res: Response) => {
  const {
    userId,
    email,
    amountMoney,
    tokenCurrentPrice,
    estimatedTokenAmount,
    walletId,
  } = req.body

  if (
    userId &&
    email &&
    amountMoney &&
    tokenCurrentPrice &&
    estimatedTokenAmount &&
    walletId
  ) {
    try {
      const newPurchaseOrder = new PurchaseOrders(req.body)

      const createPurchaseOrder = await newPurchaseOrder.save()

      res.json({
        error: false,
        item: createPurchaseOrder,
        itemCount: 1,
        message: PURCHASE_ORDER_ADDED,
      })
    } catch (err: any) {
      res.json({
        error: true,
        message: err.message || UNKNOWN_ERROR_OCCURRED,
        items: null,
        itemCount: null,
      })
    }
  } else {
    res.json({
      error: true,
      message: REQUIRED_VALUE_EMPTY,
      items: null,
      itemCount: null,
    })
  }
}

export const updatePurchaseOrder = async (req: Request, res: Response) => {
  const { id } = req.params

  if (id) {
    const getPurchaseOrder = await PurchaseOrders.findById(id)
    if (getPurchaseOrder) {
      const updatedPurchaseOrder = await PurchaseOrders.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      )

      res.json({
        error: false,
        item: updatedPurchaseOrder,
        itemCount: 1,
        message: SUCCESS_UPDATE,
      })
    } else {
      res.json({
        error: true,
        message: PURCHASE_ORDER_NOT_EXIST,
        items: null,
        itemCount: null,
      })
    }
  }
}

export const deletePurchaseOrder = async (req: Request, res: Response) => {
  const { id } = req.params

  if (id) {
    const getPurchaseOrder = await PurchaseOrders.findById(id)
    if (getPurchaseOrder) {
      const deletedProject = await PurchaseOrders.findByIdAndUpdate(id, {
        deletedAt: Date.now(),
      })

      res.json({
        error: false,
        item: deletedProject,
        itemCount: 1,
        message: SUCCESS_DELETE,
      })
    } else {
      res.json({
        error: true,
        message: PURCHASE_ORDER_NOT_EXIST,
        items: null,
        itemCount: null,
      })
    }
  }
}
