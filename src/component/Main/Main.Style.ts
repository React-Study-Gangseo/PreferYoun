import styled from "@emotion/styled";

export const MainSection = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding-bottom: 11.25rem;
  /* margin-bottom: 19.6013rem; */
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
  width: 80rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4.875rem 4.375rem;
  align-items: center;
  justify-items: center;
`;
export const ProductSection = styled.section`
  height: 100%;
  min-height: 100%;
`;
