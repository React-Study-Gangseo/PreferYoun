import styled from "@emotion/styled";

export const MainSection = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding-bottom: 11.25rem;
`;
export const Banner = styled.article`
  width: 100vw;
  height: 31.25rem;
  background: #f2f2f2;
  margin-bottom: 5rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
`;
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4.875rem 4.375rem;
`;
export const ProductSection = styled.section`
  height: calc(100vh - 41.875rem);
`;
