import { subtitle, title } from "@/components/primitives";
import { IpGeolocationLookupForm } from "./_components/ip-geolocation-lookup-form";
import { IpGeolocationResult } from "./_components/ip-geolocation-result";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>
          <span className={title({ color: "violet" })}>Discover</span> the
          Location Behind the{" "}
          <span className={title({ color: "violet" })}>IP</span>!
        </h1>
        <br />

        <h2 className={subtitle({ class: "mt-4" })}>
          Quickly and easily find out the city and country associated with any
          IP address. Enter the IP below to start your search.
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 ">
        <IpGeolocationLookupForm />
        <IpGeolocationResult />
      </div>
    </section>
  );
}
