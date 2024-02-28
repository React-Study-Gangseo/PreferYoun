import React, { useState, useEffect, useCallback } from "react";
import LeftBanner from "../../../assets/images/icon-swiper-1.svg";
import RightBanner from "../../../assets/images/icon-swiper-2.svg";
import {
  imgListWEBP,
  imgListJPG,
  imgListS,
} from "../../../assets/MokImg/BannerImg";
import { Banner } from "../Main.Style";
import {
  BannerImages,
  BannerIndicator,
  LeftButton,
  RightButton,
  Dot,
} from "./Banner.Style";
import LazyImage from "./LazyImage"; // 수정

const BannerSection: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const selectedIds = [];
    const imgListCopy = [...imgListWEBP]; // 복사본 생성

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * imgListCopy.length);
      selectedIds.push(imgListCopy[randomIndex].id);
      imgListCopy.splice(randomIndex, 1); // 선택된 요소 제거
    }

    setSelectedIds(selectedIds);
  }, [imgListWEBP]);

  useEffect(() => {
    const updateRandomIndex = () => {
      setCurrentIndex((prevIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * 5);
        } while (newIndex === prevIndex);
        return newIndex;
      });
    };

    const intervalId = setInterval(updateRandomIndex, 5000);

    return () => clearInterval(intervalId);
  }, []); // 의존성 배열에서 currentIndex 제거

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? selectedIds.length - 1 : prevIndex - 1
    );
  }, [selectedIds.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === selectedIds.length ? 0 : prevIndex + 1
    );
  }, [selectedIds.length]);

  return (
    <Banner>
      <BannerImages>
        {selectedIds.map((id, index) => (
          <LazyImage
            key={id}
            imageList={[
              {
                src: imgListWEBP[index].url, // 수정
                type: "image/webp",
                media: "(min-width: 1280px)",
              },
              {
                src: imgListS[index].url, // 수정
                type: "image/webp",
                media: "(max-width: 609px)",
              },
              {
                src: imgListJPG[index].url, // 수정
                type: "image/jpeg",
                media: "(min-width: 1280px)",
              },
            ]}
            alt={`Banner ${id}`}
            className={currentIndex === index ? "active" : "inactive"}
            isInitiallyVisible={index === 0}
          />
        ))}
      </BannerImages>
      <div>
        <LeftButton aria-label="배너 좌측으로 넘기기" onClick={handlePrevious}>
          <img src={LeftBanner} alt="좌측 화살표 이미지" />
        </LeftButton>

        <RightButton aria-label="배너 우측으로 넘기기" onClick={handleNext}>
          <img src={RightBanner} alt="우측 화살표 이미지" />
        </RightButton>
      </div>
      <BannerIndicator>
        {selectedIds.length > 1 &&
          selectedIds.map((id, index) => (
            <Dot
              key={id}
              className={`dot ${currentIndex === index ? "active" : ""}`}
            ></Dot>
          ))}
      </BannerIndicator>
    </Banner>
  );
};

export default BannerSection;
