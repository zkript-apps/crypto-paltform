import { FIFTEEN_MINUTES, TWELVE_MINUTES } from "@/common/constants"
import { API_PURCHASE_ORDERS } from "@/common/constants/api-routes"
import { ApiService } from "@/common/service/api"
import { useQuery } from "@tanstack/react-query"

export async function getPaginatedPurchaseOrders(page: number, email: string) {
  const apiService = new ApiService()
  return await apiService.get(
    `${API_PURCHASE_ORDERS}/paginated?page=${page}&email=${email}`
  )
}

function useGetPaginatedPurchaseOrders(page: number, email: string) {
  const query = useQuery({
    queryKey: ["paginated-purchase-orders", page, email],
    queryFn: () => getPaginatedPurchaseOrders(page, email),
    enabled: !!email,
    gcTime: FIFTEEN_MINUTES,
    staleTime: TWELVE_MINUTES,
  })
  return query
}

export default useGetPaginatedPurchaseOrders
