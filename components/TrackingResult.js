import { AxiosError } from "axios";
import React from "react";

const TrackingResult = ({ data, error }) => {
  //    const [,idbarcode] = data;
  // console.log("error 123", error);
  return (
    <section>
      {data.tracked_barcode}
      <h1>{error}</h1>
    </section>
    /* <h1>{barcode(data)}</h1> */
  );
};

export default TrackingResult;
