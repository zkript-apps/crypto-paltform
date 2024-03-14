import { API_PURCHASE_ORDERS } from "@/common/constants/api-routes"
import { ApiService } from "@/common/service/api"
import { useQuery } from "@tanstack/react-query"

export async function getPaginatedPurchaseOrders(page: number, email?: string) {
  const apiService = new ApiService()
  return await apiService.get(
    `${API_PURCHASE_ORDERS}/paginated?page=${page}&email=${email}`
  )
}

function useGetPaginatedPurchaseOrders(page: number, email?: string) {
  const query = useQuery({
    queryKey: ["paginated-purchase-orders", page, email],
    queryFn: () => getPaginatedPurchaseOrders(page, email),
  })
  return query
}

export default useGetPaginatedPurchaseOrders
