"use client";

import { useGeolocationQuery } from "@/api/geolocation/hooks/useGeolocationQuery";
import { Map } from "@/components/map";
import { useGeolocationStore } from "@/stores/geolocation-store";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export const IpGeolocationResult = () => {
  const selectedIp = useGeolocationStore((state) => state.selectedIp);
  const { data, isSuccess } = useGeolocationQuery(selectedIp);

  if (!selectedIp || !isSuccess) {
    return null;
  }

  const { country, regionName, city, lat, lon } = data.responseObject;

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">IP Location Found!</p>

          <p className="text-small text-default-500">
            Here are the geolocation details for the provided IP address
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-4">
        <ul>
          <li>
            <strong>IP Address:</strong> {selectedIp}
          </li>
          <li>
            <strong>Country:</strong> {country}
          </li>
          <li>
            <strong>Region:</strong> {regionName}
          </li>
          <li>
            <strong>City:</strong> {city}
          </li>
        </ul>

        <Map coordinates={[lon, lat]} />
      </CardBody>
    </Card>
  );
};
