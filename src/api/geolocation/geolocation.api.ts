import { isAxiosError } from "axios";
import { apiClient } from "../api.client";
import { ServiceResponse } from "../types/service-response.interface";
import { GeolocationResponse } from "./types/geolocation-response.interface";

const GEOLOCATION_BASE_URL = "/v1/geolocation";

export const fetchGeolocation = async (
  ip: string
): Promise<ServiceResponse<GeolocationResponse>> => {
  try {
    const response = await apiClient.get<ServiceResponse<GeolocationResponse>>(
      `${GEOLOCATION_BASE_URL}/${ip}`
    );

    return response.data;
  } catch (error) {
    const errorResponse = isAxiosError(error)
      ? error.response?.data || error.message
      : error;

    return Promise.reject(errorResponse);
  }
};
