import styled from "@emotion/styled";
import { ButtonStyle } from "component/common/Button/Button";

export const Main = styled.main`
  width: 100%;
  height: auto;
  margin: 80px auto 22.375rem;
`;
export const Heading = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
`;

export const OrderListSection = styled.section`
  width: 100%;
  margin-top: 50px;
`;
export const OrderedList = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 3.125rem;
  & thead {
    background: #f2f2f2;
    height: 3rem;
  }
  & th {
    vertical-align: middle;
  }
  & th:nth-of-type(3) {
    width: calc(100% * 3 / 7);
  }
  & th:nth-of-type(2),
  & th:nth-of-type(5) {
    width: 12rem;
  }
  & tbody tr {
    height: 5rem;
  }
  & td {
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #c4c4c4;
  }
`;
export const LogOutBtn = styled(ButtonStyle)`
  margin: 0 auto;
`;

export const Item = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 80px;
  justify-content: space-between;
  & img {
    width: 3.125rem;
    aspect-ratio: 1 / 1;
    border-radius: 4px;
  }
`;
