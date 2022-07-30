import { NothingBarcodeStyle } from "./nothingBarcode.style";

const NothingBarcode = () => {
  return (
    <NothingBarcodeStyle>
      <br />
      <img src="/images/no-shipment.png" />
      <br />
      <br />
      <h1>No Shipment to Track</h1>

      <p>Please enter your MailPlus tracking ID above</p>
    </NothingBarcodeStyle>
  );
};

export default NothingBarcode;
