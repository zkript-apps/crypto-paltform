import { Application } from "express"
import UsersRoute from "@/routes/users"
import PurchaseOrders from "@/routes/purchase-orders"
import { API_ROOT } from "@repo/constants"

export default function (app: Application) {
  app.use(`${API_ROOT}/users`, UsersRoute)
  app.use(`${API_ROOT}/purchase-orders`, PurchaseOrders)
}
