import { Request, Response } from 'express'
import PurchaseOrders from '@/models/purchaseOrders'
import { UNKNOWN_ERROR_OCCURRED } from '@/common/constants/messages'

export const getPaginatedPurchaseOrders = async (req: Request, res: Response) => {
  const { page, email } = req.query;
  try {
    const startIndex = (Number(page) - 1) * 5;
    const endIndex = startIndex + 5;

    const purchaseOrdersCounts = await PurchaseOrders.find({ deletedAt: { $exists: false }, email }).countDocuments()
    const getAllPurchaseOrders = await PurchaseOrders.find({ deletedAt: { $exists: false }, email }).sort({ createdAt: -1 })
    const paginatedPurchaseOrders = getAllPurchaseOrders.slice(startIndex, endIndex)

    res.json({
      error: false,
      items: paginatedPurchaseOrders,
      itemCount: paginatedPurchaseOrders.length,
      itemAllCount: purchaseOrdersCounts,
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