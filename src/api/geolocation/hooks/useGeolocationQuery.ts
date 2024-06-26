import type {
  ServiceErrorResponse,
  ServiceResponse,
} from "@/api/types/service-response.interface";
import { skipToken, useQuery } from "@tanstack/react-query";
import { geolocationKeys } from "../config/geolocation-query-keys";
import { fetchGeolocation } from "../geolocation.api";
import type { GeolocationResponse } from "../types/geolocation-response.interface";

export const useGeolocationQuery = (ip: string) =>
  useQuery<ServiceResponse<GeolocationResponse>, ServiceErrorResponse>({
    queryKey: geolocationKeys.geolocation(ip),
    queryFn: ip ? () => fetchGeolocation(ip) : skipToken,
    retry: false,
  });
