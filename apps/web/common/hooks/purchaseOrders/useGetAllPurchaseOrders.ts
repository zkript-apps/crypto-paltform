import { FIFTEEN_MINUTES, TWELVE_MINUTES } from "@/common/constants"
import { API_PURCHASE_ORDERS } from "@/common/constants/api-routes"
import { ApiService } from "@/common/service/api"
import { useQuery } from "@tanstack/react-query"

export const getAllPurchaseOrders = async () => {
  const apiService = new ApiService()
  return await apiService.get(`${API_PURCHASE_ORDERS}`)
}

const useGetAllPurchaseOrders = () => {
  const query = useQuery({
    queryKey: ["all-purchase-orders"],
    queryFn: () => getAllPurchaseOrders(),
    gcTime: FIFTEEN_MINUTES,
    staleTime: TWELVE_MINUTES,
  })
  return query
}

export default useGetAllPurchaseOrders
