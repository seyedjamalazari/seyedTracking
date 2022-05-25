import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import TrackingForm from "../components/TrackingForm";
import TrackingResult from "../components/TrackingResult";
import TrakingMail from "../components/TrakingMail";
import ResultBarcodeComponente from "../components/ResultBarcodeComponente";


export default function Home() {
  const [tracking, setTracking] = useState({
    status: "init",
    data: undefined,
    // error: undefined,
  });

  const [data, setData] = useState();
  const [error, setError] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // console.log("useEffect", id);
    if (id) {
      const url = `http://192.168.100.184:3031/api/v1/customer/trackings/public/${id.toUpperCase()}`;

      setTracking({ ...tracking, status: "loading" });

      axios
        .get(url)
        .then(({ data }) => {
          console.log("data", data);
          setTracking({ data, status: "success" });

          setData(data);
        })
        .catch((error) => {
          setTracking({ error, status: "error" });

          setError(error);
          console.log("error in ", error);
        });
    }
  }, [id]);

  const handleSubmit = ({ barcode }) => {
    router.push(`/${barcode}`);
  };

  // console.log("error in ", error);
  // console.log("tracking ", tracking);

  return (
    <>
      <TrackingForm onSubmit={handleSubmit} />

      {data && <TrackingResult data={data} />}
      {error && error.message}     
      {/* <Traking response={response} />  */}
      {(() => {
        switch (tracking.status) {
          case "init":
            return "noting";

          case "loading":
            return "loading";
          case "success":
            return <ResultBarcodeComponente/> ;
          // return <TrakingMail/>
          case "error":
            return  <h2> {error && error.message}</h2>;
          default:
            return "noting";
        }
      })()}
    </>
  );
}
