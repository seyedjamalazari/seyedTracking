import styled from "styled-components";
import { devicesMin } from "../../styles/themes/variables";

 export const ResultBarcodeHeadStyle=styled.div`
 font-family: sans-serif;
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 500;
    /* display:flex; */

h3{

    color: #4a4a4a; 
    font-size:20px;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector {
   background-color:white;
 
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector {width:150px}




@media  ${devicesMin.mobileL} {
   display:flex;

}
 `