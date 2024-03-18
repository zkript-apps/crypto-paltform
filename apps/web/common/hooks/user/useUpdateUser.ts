import { API_USERS } from "@/common/constants/api-routes"
import { ApiService } from "@/common/service/api"
import { useMutation } from "@tanstack/react-query"
import { T_User } from "./types"

export async function updateUser(id: string, data: T_User) {
  const apiService = new ApiService()
  return await apiService.patch(`${API_USERS}/update/${id}`, data)
}

function useUpdateUser(id: string) {
  const query = useMutation({
    mutationFn: (data: T_User) => updateUser(id, data),
  })
  return query
}

export default useUpdateUser
