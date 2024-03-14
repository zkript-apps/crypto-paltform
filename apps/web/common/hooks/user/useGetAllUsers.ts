import { API_USERS } from "@/common/constants/api-routes";
import { ApiService } from "@/common/service/api";
import { useQuery } from "@tanstack/react-query";

export const getAllUsers = async () => {
  const apiService = new ApiService();
  return await apiService.get(`${API_USERS}`);
}

const useGetAllUsers = () => {
  const query = useQuery({
    queryKey: ['all-users'],
    queryFn: () => getAllUsers(),
  });
  return query;
}

export default useGetAllUsers;
