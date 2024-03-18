export type T_Purchase_Orders = {
  _id?: string
  userId?: string
  email: string | null
  amountMoney: number
  tokenCurrentPrice: number
  estimatedTokenAmount: number
  wireReferenceId?: string
  walletId: string | null
  status?: "Pending" | "Accepted" | "Rejected"
}

export type T_Update_Purchase_Orders = {
  _id?: string
  userId?: string
  email?: string | null
  amountMoney?: number
  tokenCurrentPrice?: number
  estimatedTokenAmount?: number
  wireReferenceId?: string
  walletId?: string | null
  status?: "Pending" | "Accepted" | "Rejected"
}
