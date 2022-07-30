import styled from "styled-components";
import { devicesMin } from "../../styles/themes/variables";

export const NavigationMailplusStyle = styled.div`
  width: 121px;
  position: absolute;
  margin: 0 auto !important;
  right: 0;
  left: 0;
  top: 0;
  img {
    max-width: 100%;
  }
  @media ${devicesMin.tablet} {
    right: 100%;
  }
`;
