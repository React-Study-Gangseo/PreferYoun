import styled from "@emotion/styled";

export const MobileSellerItemWrapper = styled.tr`
  @media (min-width: 897px) {
    display: none;
  }
`;

export const DesktopSellerItemWrapper = styled.tr`
  @media (max-width: 896px) {
    display: none;
  }
`;
