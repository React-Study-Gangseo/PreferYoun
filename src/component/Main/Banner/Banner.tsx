import React, { useState, useEffect, useCallback } from "react";
import LeftBanner from "../../../assets/images/icon-swiper-1.svg";
import RightBanner from "../../../assets/images/icon-swiper-2.svg";
import { imgList } from "../../../assets/MokImg/BannerImg";
import { Banner } from "../Main.Style";
import {
  BannerImages,
  BannerIndicator,
  LeftButton,
  RightButton,
  Dot,
} from "./Banner.Style";

const BannerSection: React.FC = () => {
  const [bannerImg, setBannerImg] = useState<string[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const selectedImages = [];
    const selectedIds = [];
    const imgListCopy = [...imgList]; // 복사본 생성

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * imgListCopy.length);
      selectedImages.push(imgListCopy[randomIndex].url);
      selectedIds.push(imgListCopy[randomIndex].id);
      imgListCopy.splice(randomIndex, 1); // 선택된 요소 제거
    }

    setBannerImg(selectedImages);
    setSelectedIds(selectedIds);
  }, [imgList]);

  useEffect(() => {
    const updateRandomIndex = () => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * 5); // 1~10까지의 랜덤 정수
      } while (randomIndex === currentIndex);

      setCurrentIndex(randomIndex);
    };

    const intervalId = setInterval(updateRandomIndex, 4000);

    return () => clearInterval(intervalId);
  }, []); // 의존성 배열에서 currentIndex 제거

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? bannerImg.length - 1 : prevIndex - 1
    );
  }, [bannerImg.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === bannerImg.length ? 0 : prevIndex + 1
    );
  }, [bannerImg.length]);

  return (
    <Banner>
      <BannerImages>
        {bannerImg.map((img, index) => (
          <img
            key={selectedIds[index]} // 고유한 id를 key로 사용
            src={img}
            alt="상품사진 배너 이미지"
            className={currentIndex === index ? "active" : "inactive"}
            loading="lazy"
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
        {bannerImg.length > 1 &&
          bannerImg.map((_, index) => (
            <Dot
              key={selectedIds[index]} // 고유한 id를 key로 사용
              className={`dot ${currentIndex === index ? "active" : ""}`}
            ></Dot>
          ))}
      </BannerIndicator>
    </Banner>
  );
};

export default BannerSection;
