import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import ShareForm from "../components/Forms/ShareForm";

import ResultBarcodeComponente from "../components/TrackingStates/ResultBarcode";
import LoadingBarcodeComponent from "../components/TrackingStates/LoadingBarcode";
import ErrorBarcodeComponent from "../components/TrackingStates/ErrorBarcode";
import NothingBarcodeComponent from "../components/TrackingStates/NothingBarcode";
import HelpComponent from "../components/Helpers/Help";

export default function Home() {
  const [tracking, setTracking] = useState({
    status: "init",
    data: undefined,
    // error: undefined,
  });

  const router = useRouter();
  const { id } = router.query;

  const loadTracking = (barcode) => {
    if (!barcode) return false;

    const url = `http://192.168.100.184:3031/api/v1/customer/trackings/public/${barcode.toUpperCase()}`;

    setTracking({ ...tracking, status: "loading" });

    axios
      .get(url)
      .then(({ data }) => {
        setTracking({ data, status: "success" });
      })
      .catch((error) => {
        setTracking({ error, status: "error" });
      });
  };

  useEffect(() => {
    loadTracking(id);
  }, [id]);

  const handleSubmit = ({ barcode }) => {
    router.push(`/${barcode}`);
  };

  const { data, error, status } = tracking;

  // const { barcodes } = data;

  const handleChange = (barcode) => {
    // console.log("barcode selected", barcode);
    // if (barcodes) {
    loadTracking(barcode);
    // }
  };

  return (
    <>
      <ShareForm onSubmit={handleSubmit} />

      {(() => {
        switch (status) {
          case "init":
            return <NothingBarcodeComponent />;

          case "loading":
            return <LoadingBarcodeComponent />;
          case "success":
            return (
              <> <HelpComponent />
                <ResultBarcodeComponente data={data} onChange={handleChange} />{" "}
               
              </>
            );
          // return <TrakingMail/>
          case "error":
            return (
              <><HelpComponent />
                <ErrorBarcodeComponent>{error}</ErrorBarcodeComponent>
            
              </>
            );

          default:

          
            return <NothingBarcodeComponent />;
        }
      })()}
    </>
  );
}
