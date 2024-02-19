import styled from "@emotion/styled";

export const SkeletonWrapper = styled.div`
  background-color: #e0e0e0;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  @media (max-width: 896px) {
    min-width: 350px;
    display: flex;
    gap: 20px;
    border-bottom: 1px solid #c4c4c4;
  }
`;

export const SkeletonImage = styled.div`
  width: 23.75rem;
  height: 23.75rem;
  aspect-ratio: 1/1;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 1rem;
  @media (max-width: 896px) {
    width: 150px;
    height: 150px;
  }
`;

export const SkeletonInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const SkeletonInfo = styled.div`
  background-color: #c4c4c4;
  width: 60%;
  height: 1rem;
`;

export const SkeletonName = styled.div`
  background-color: #c4c4c4;
  width: 80%;
  height: 1.125rem;
`;

export const SkeletonPrice = styled.div`
  background-color: #c4c4c4;
  width: 30%;
  height: 1.5rem;
`;
