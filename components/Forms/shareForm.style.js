import styled from "styled-components";
import { devicesMin } from "../../styles/themes/variables";

export const ShareFormStyle = styled.div`
  background-color: #cfe0ce;
  height: 160px;

  h4 {
    font-size: 14px;
    color: #4a4a4a;
    padding-top: 2px;
    color: #4a4a4a;
    position: relative;
    margin-left: 2%;
    /* line-height:4% */
  }

  .ant-input {
    height: 70px;
    border-radius: 4px;
    width: 90%;
    /* left:; */
    border-radius: 0.3rem;
    top: 27%;
    color: #222;
    font-size: 15px;
    font-weight: 400;
    /* position:relative; */
    /* left:5%; */
    right: -5%;
  }
  .ant-btn {
    height: 50px;
    border-radius: 4px;
    width: 102px;
    background-color: #3b9c91;
    margin-right: 10px;
    top: -60px;
    left: 63%;
    color: white;
    position: relative;
  }
  .wrapperButton {
  }

  @media ${devicesMin.tablet} {
    .ant-btn {
      left: 80%;
    }
  }
`;
