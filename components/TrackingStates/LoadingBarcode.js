import { LoadingOutlined } from "@ant-design/icons";
import { LoadingBarcodeComponentStyle } from "./loadingBarcode.style";
 import {Spin} from 'antd';
const antIcon=(
    <LoadingOutlined  style={{fontSize:200}} spin />
)



const LoadingBarcodeComponent = () => {
    return (
      <LoadingBarcodeComponentStyle>
<Spin indicator={antIcon}/>
<h2>LOADING...</h2>
      </LoadingBarcodeComponentStyle>
            
     
    );
};

export default LoadingBarcodeComponent;














// import { LoadingOutlined } from "@ant-design/icons";
// import { Spin } from "antd";


// const LoadingBarcodeComponent = () => {
//     const antIcon = (<LoadingOutlined spin />);
//   return 
//   (

//       <Spin indicator={antIcon} />

//   );
// };

// export default LoadingBarcodeComponent;
