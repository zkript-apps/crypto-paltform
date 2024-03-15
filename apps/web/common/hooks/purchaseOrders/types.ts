export type T_Purchase_Orders = {
  _id?: string,
  userId?: string
  email: string
  amountMoney: number
  tokenCurrentPrice: number
  estimatedTokenAmount: number
  wireReferenceId?: string
  walletId: string
  status?: "Pending" | "Accepted" | "Rejected"
}

export type T_Update_Purchase_Orders = {
  _id?: string,
  userId?: string
  email?: string
  amountMoney?: number
  tokenCurrentPrice?: number
  estimatedTokenAmount?: number
  wireReferenceId?: string
  walletId?: string
  status?: "Pending" | "Accepted" | "Rejected"
}
