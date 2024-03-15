import { FIFTEEN_MINUTES, TWELVE_MINUTES } from "@/common/constants"
import { ApiService } from "@/common/service/api"
import { useQuery } from "@tanstack/react-query"

export async function getExchangeRate() {
  const apiService = new ApiService("coinapi")
  return await apiService.get(`/exchangerate/ETH/EUR`)
}

function useGetExchangeRate() {
  const query = useQuery({
    queryKey: ["exchange-rate"],
    queryFn: () => getExchangeRate(),
    refetchOnWindowFocus: false,
    gcTime: FIFTEEN_MINUTES * 4,
    staleTime: TWELVE_MINUTES * 4,
  })
  return query
}

export default useGetExchangeRate
