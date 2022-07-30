import { Select } from "antd";
import axios from "axios";
import React from "react";
import { ResultBarcodeHeadStyle } from "./resultBarcodeHead.style";
import ModalShareForm from "../Forms/ModalShareForm";
const { Option } = Select;

const ResultBarcodeHead = ({ barcodes, tracked_barcode, onChange }) => {
  const url = "/window.location.href";
  axios.post(url);

  const array = barcodes.map((barcode) => ({
    id: barcode.id,
    code: barcode.code,
  }));

  const { id } = barcodes;

  return (
    <ResultBarcodeHeadStyle>
      <br />
      <h3>
        Tracking id:
        <br />
        {tracked_barcode}{" "}
      </h3>
  
        <Select defaultValue={tracked_barcode}  onChange={onChange}> 
           {array.map((id) => (
            <Option value={id.code}>{id.code}</Option>
          ))}
        </Select>
     
      <ModalShareForm />
    
    </ResultBarcodeHeadStyle>
  );
};

export default ResultBarcodeHead;
