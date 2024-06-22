import { skipToken, useQuery } from "@tanstack/react-query";
import { fetchGeolocation } from "../geolocation.api";
import { geolocationKeys } from "../config/geolocation-query-keys.config";

export const useGeolocationQuery = (ip: string) =>
  useQuery({
    queryKey: geolocationKeys.geolocation(ip),
    queryFn: ip ? () => fetchGeolocation(ip) : skipToken,
  });
