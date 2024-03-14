import { API_PURCHASE_ORDERS } from "@/common/constants/api-routes";
import { ApiService } from "@/common/service/api";
import { useQuery } from "@tanstack/react-query";

export const getPurchaseOrder = async (id: string) => {
  const apiService = new ApiService();
  return await apiService.get(`${API_PURCHASE_ORDERS}/${id}`);
}

const useGetPurchaseOrder = (id: string) => {
  const query = useQuery({
    queryKey: ['purchase-order', id],
    queryFn: () => getPurchaseOrder(id),
    enabled: !!id
  });
  return query;
}

export default useGetPurchaseOrder;
