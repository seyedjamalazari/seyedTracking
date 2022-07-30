import {  Empty } from "antd";
import React from "react";
import { ErrorBarcodeComponentStyle } from "./errorBarcode.style";

const ErrorBarcodeComponent = () => {
  return (
    <ErrorBarcodeComponentStyle>
    
      <Empty description={false} style={{paddingTop:70}}>
        <h2>This barcode is not valid.</h2>
      </Empty>
    </ErrorBarcodeComponentStyle>
  );
};

export default ErrorBarcodeComponent;
