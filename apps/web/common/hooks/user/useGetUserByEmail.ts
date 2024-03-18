import { API_USERS } from "@/common/constants/api-routes"
import { ApiService } from "@/common/service/api"
import useTorusStore from "@/common/store/useTorusStore"
import { useQuery } from "@tanstack/react-query"

export const getUserByEmail = async (email: string) => {
  const apiService = new ApiService()
  return await apiService.get(`${API_USERS}/email/${email}`)
}

const useGetUserByEmail = () => {
  const torusUser = useTorusStore((state) => state.user);
  const query = useQuery({
    queryKey: ["user-by-email", torusUser?.email],
    queryFn: () => getUserByEmail(torusUser?.email as string),
    enabled: !!torusUser?.email,
  })
  return query
}

export default useGetUserByEmail
