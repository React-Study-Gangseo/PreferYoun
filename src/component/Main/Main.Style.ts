import styled from "@emotion/styled";

export const MainSection = styled.main`
  width: 100%;
  max-width: 80rem;
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
  flex-direction: column;
  @media (max-width: 896px) {
    height: 20rem;
  }
`;
export const ProductList = styled.ul`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 87.5rem) {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
  gap: 4.875rem 4.375rem;
  align-items: center;
  justify-items: center;
  @media (max-width: 896px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: normal;
    justify-content: left;
    width: 100%;
    gap: 10px;
  }
  & li {
    width: 100%;
  }
`;
export const ProductSection = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100%;
  @media (max-width: 420px) {
    width: 100%;
  }
`;
