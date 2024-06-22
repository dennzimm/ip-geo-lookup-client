export const geolocationKeys = {
  geolocation: (ip: string) => ["geolocation", ip] as const,
} as const;
