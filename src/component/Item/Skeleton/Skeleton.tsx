import React from "react";
import {
  SkeletonWrapper,
  SkeletonImage,
  SkeletonInfoContainer,
  SkeletonInfo,
  SkeletonName,
  SkeletonPrice,
} from "./Skeleton.style";

const Skeleton: React.FC<{ count: number }> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonWrapper key={index}>
          <SkeletonImage />
          <SkeletonInfoContainer>
            <SkeletonInfo />
            <SkeletonName />
            <SkeletonPrice />
          </SkeletonInfoContainer>
        </SkeletonWrapper>
      ))}
    </>
  );
};

export default Skeleton;
