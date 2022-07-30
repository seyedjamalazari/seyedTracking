import ResultBarcodeHead from "./ResultBarcodeHead";
import { ResultBarcodeComponenteStyle } from "./resultBarcode.style";
import StepBarcodeResult from "./StepBarcodeResult";

const ResultBarcodeComponente = ({ data,onChange }) => {
  const {
    tracked_barcode,

    pickup_address,
    item_count,
    pickup_contact,
    events,
    barcodes,
  } = data;
  // const [{id}]=barcodes;

  const { city, country } = pickup_address;
  //const event=events.map(item =>item([]));
  const { eventsItems } = events.map((event) => {
    event.name;
  });

  // const {barcodesItems}=barcodes.map((barcode)=>{
  //   barcode.code;
  // })



  return (
    <ResultBarcodeComponenteStyle>
      <ResultBarcodeHead
        barcodes={barcodes}
        tracked_barcode={tracked_barcode}
        onChange={onChange}
      ></ResultBarcodeHead>
      <StepBarcodeResult events={events} />
    </ResultBarcodeComponenteStyle>
  );
};

export default ResultBarcodeComponente;
