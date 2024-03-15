import { API_PURCHASE_ORDERS } from "@/common/constants/api-routes"
import { ApiService } from "@/common/service/api"
import { useMutation } from "@tanstack/react-query"
import { T_Purchase_Orders } from "./types"

export async function addPurchaseOrder(data: T_Purchase_Orders) {
  const apiService = new ApiService()
  return await apiService.post(`${API_PURCHASE_ORDERS}`, data)
}

function useAddPurchaseOrder() {
  const query = useMutation({
    mutationFn: (data: T_Purchase_Orders) => addPurchaseOrder(data),
  })
  return query
}

export default useAddPurchaseOrder
