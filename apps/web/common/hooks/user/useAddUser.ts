import { API_USERS } from "@/common/constants/api-routes"
import { ApiService } from "@/common/service/api"
import { useMutation } from "@tanstack/react-query"

export async function addUser(data: { email: string, walletId: string }) {
  const apiService = new ApiService()
  return await apiService.post(`${API_USERS}`, data)
}

function useAddUser() {
  const query = useMutation({
    mutationFn: (data: { email: string, walletId: string }) => addUser(data),
  })
  return query
}

export default useAddUser
