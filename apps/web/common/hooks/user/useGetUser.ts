import { API_USERS } from "@/common/constants/api-routes"
import { ApiService } from "@/common/service/api"
import { useQuery } from "@tanstack/react-query"

export const getUser = async (id: string) => {
  const apiService = new ApiService()
  return await apiService.get(`${API_USERS}/${id}`)
}

const useGetUser = (id: string) => {
  const query = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    enabled: !!id,
  })
  return query
}

export default useGetUser
