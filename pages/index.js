
import { useRouter } from "next/router";



import Help from "../components/Helpers/Help";
import ShareForm from "../components/Forms/ShareForm";
import NothingBarcode from "../components/TrackingStates/NothingBarcode";

export default function Home() {
  const router = useRouter();

  const handleSubmit = ({ barcode }) => {
    router.push(`/${barcode}`);
  };

  return (
    <>
     <ShareForm onSubmit={handleSubmit}/>
      <Help />

   <NothingBarcode/>
    </>
  );
}
