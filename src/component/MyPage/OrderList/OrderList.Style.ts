import styled from "@emotion/styled";

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
