import { API_PURCHASE_ORDERS } from "@/common/constants/api-routes"
import { ApiService } from "@/common/service/api"
import { useQuery } from "@tanstack/react-query"

export async function getPaginatedProjects(page: number, email: string) {
  const apiService = new ApiService()
  return await apiService.get(
    `${API_PURCHASE_ORDERS}/paginated?page=${page}&email=${email}`
  )
}

function useGetPaginatedProjects(page: number, email: string) {
  const query = useQuery({
    queryKey: ["paginated-purchase-orders", page, email],
    queryFn: () => getPaginatedProjects(page, email),
  })
  return query
}

export default useGetPaginatedProjects
