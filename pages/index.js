import { useEffect } from "react";
import { useRouter } from "next/router";
import TrackingForm from "../components/TrackingForm";
import Traking from "../components/traking";

export default function Home() {
  const router = useRouter();

  const handleSubmit = ({ barcode }) => {
    router.push(`/${barcode}`);
  };

  return (
    <>
      <TrackingForm onSubmit={handleSubmit} />
      {/* <Traking /> */}
    </>
  );
}
