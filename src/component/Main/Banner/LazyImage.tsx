import React, { useEffect, useRef } from "react";

interface ImageSource {
  src: string;
  type: string;
  media: string;
}

interface LazyImageProps {
  imageList: ImageSource[];
  alt: string;
  className: string;
  isInitiallyVisible?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  imageList,
  alt,
  className,
  isInitiallyVisible = false,
}) => {
  const picRef = useRef<HTMLPictureElement>(null);

  useEffect(() => {
    if (picRef.current) {
      picRef.current.querySelectorAll("source").forEach((source) => {
        source.srcset = source.dataset.srcset || "";
      });
    }
  }, [imageList, isInitiallyVisible]);

  const jpgImage = imageList.find((image) => image.type === "image/jpeg"); // 추가

  return (
    <picture ref={picRef} className={className}>
      {imageList
        .filter((image) => image.type !== "image/jpeg")
        .map((image, index) => (
          <source
            key={index}
            data-srcset={image.src}
            media={image.media}
            type={image.type}
          />
        ))}
      <img src={jpgImage ? jpgImage.src : ""} alt={alt} />
    </picture>
  );
};

export default LazyImage;
