"use client";

import { useGeolocationQuery } from "@/api/geolocation/hooks/useGeolocationQuery";
import { useGeolocationStore } from "@/stores/geolocation.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  ip: z
    .string()
    .min(1, { message: "Please enter an IP address" })
    .ip({ message: "Please enter a valid IP address" }),
});

type FormValues = z.infer<typeof formSchema>;

export const IpGeolocationLookupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const selectedIp = useGeolocationStore((state) => state.selectedIp);
  const setSelectedIp = useGeolocationStore((state) => state.setSelectedIp);

  const { error, isFetching, isError } = useGeolocationQuery(selectedIp);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setSelectedIp(data.ip);
  };

  return (
    <form className="flex gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        size="lg"
        placeholder="Enter an IP address"
        {...register("ip")}
        isInvalid={!!errors.ip || isError}
        errorMessage={errors.ip?.message || error?.message}
        isDisabled={isFetching}
        isClearable
      />

      <Button
        type="submit"
        size="lg"
        color="primary"
        variant="ghost"
        isLoading={isFetching}
      >
        Lookup IP!
      </Button>
    </form>
  );
};
