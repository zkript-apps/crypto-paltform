import { FIFTEEN_MINUTES, TWELVE_MINUTES } from "@/common/constants"
import { ApiService } from "@/common/service/api"
import { useQuery } from "@tanstack/react-query"

export async function getLatestTokenPrice() {
  const apiService = new ApiService("coinapi")
  const res = await apiService.get(`/exchangerate/ETH/EUR/history?period_id=1HRS&limit=24`)
  return res.reverse()
}

function useGetLatestTokenPrice() {
  const query = useQuery({
    queryKey: ["latest-token-price"],
    queryFn: () => getLatestTokenPrice(),
    refetchOnWindowFocus: false,
    gcTime: FIFTEEN_MINUTES * 4,
    staleTime: TWELVE_MINUTES * 4,
  })
  return query
}

export default useGetLatestTokenPrice
