import { API_PURCHASE_ORDERS } from "@/common/constants/api-routes"
import { ApiService } from "@/common/service/api"
import { useMutation } from "@tanstack/react-query"

export async function deletePurchaseOrder(id: string) {
  const apiService = new ApiService();
  return await apiService.delete(`${API_PURCHASE_ORDERS}/delete/${id}`)
}

function useDeletePurchaseOrder() {
  const query = useMutation({
    mutationFn: (id: string) => deletePurchaseOrder(id)
  })
  return query
}

export default useDeletePurchaseOrder
