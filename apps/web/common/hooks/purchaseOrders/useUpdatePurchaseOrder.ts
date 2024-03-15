import { API_PURCHASE_ORDERS, API_USERS } from "@/common/constants/api-routes"
import { ApiService } from "@/common/service/api"
import { useMutation } from "@tanstack/react-query"
import { T_Purchase_Orders } from "./types"

export async function updatePurchaseOrder(id: string, data: T_Purchase_Orders) {
  const apiService = new ApiService()
  return await apiService.patch(`${API_PURCHASE_ORDERS}/update/${id}`, data)
}

function useUpdatePurchaseOrder(id: string) {
  const query = useMutation({
    mutationFn: (data: T_Purchase_Orders) => updatePurchaseOrder(id, data),
  })
  return query
}

export default useUpdatePurchaseOrder
