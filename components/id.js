// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";

// import TrackingForm from "../components/TrackingForm";
// import TrackingResult from "../components/TrackingResult";

// export default function Home() {
//   const [response, setResponse] = useState();
//   const [error, setError] = useState();
//   const router = useRouter();
//   const { id } = router.query;
//   //   useState;

//   useEffect(() => {
//     // console.log("useEffect", id);
//     if (id) {
//       const url = `http://192.168.100.184:3031/api/v1/customer/trackings/public/${id.toUpperCase()}`;

//       axios
//         .get(url)
//         .then(({ data }) => {
//           console.log("data", data);
//           setResponse(data);
//         })
//         .catch((error) => {
//           setError(error);
//         });
//     }
//   }, [id]);



  

//   const handleSubmit = ({ barcode }) => {
//     router.push(`/${barcode}`);
//   };

//   console.log("response", response);
//   console.log("error in ", error);

//   return (
//     <>
//       <TrackingForm onSubmit={handleSubmit} />
//       {response && <TrackingResult data={response} error={error} />}
//       {/* <Traking response={response} /> */}
//     </>
//   );
// }