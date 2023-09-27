import styled from "@emotion/styled";
import { ButtonStyle } from "component/common/Button/Button";
export const OrderedIItemWrapper = styled.article`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #c4c4c4;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  & > div {
    display: flex;
    gap: 5px;
    & img {
      max-width: 280px;
      width: 30%;
      aspect-ratio: 1/1;
      object-fit: contain;
    }
    & div {
      padding: 20px;
      & p {
        margin-bottom: 15px;
      }
      & span:first-of-type::after {
        content: "/";
      }
    }
  }
`;

export const OrderedDate = styled.h2`
  border-bottom: 1px solid #767676;
  font-size: 24px;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const BtnGroup = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  padding-bottom: 10px;
`;

export const DetailBtn = styled(ButtonStyle)`
  padding: 0px 20px;
  flex-grow: 0.4;
  height: 30px;
  border: 1px solid #767676;
  line-height: 100%;
`;
export const KeepBtn = styled(ButtonStyle)`
  padding: 0px 20px;
  flex-grow: 0.4;
  height: 30px;
  line-height: 100%;
`;
export const MoreInfoSection = styled.section`
  width: 100%;
  height: auto;
  border: 2px solid #e0e0e0;
  padding: 20px;
  margin: 10px 0;
  & p {
    font-size: 20px;
  }
  & p:first-of-type::after {
    content: "";
    border-bottom: 2px solid #e0e0e0;
    display: block;
    margin: 5px 0;
  }
`;

export const TotalPrice = styled.p`
  text-align: right;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const OrderNumber = styled.p`
  text-align: right;
  margin-bottom: 10px;
  font-size: 1rem;
`;
