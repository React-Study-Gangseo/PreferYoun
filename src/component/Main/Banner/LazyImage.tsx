import React, { useEffect, useRef } from "react";

interface imageProps {
  src: string;
  alt: string;
  className: string;
}

const LazyImage: React.FC<imageProps> = ({ src, alt, className }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          image.src = image.dataset.src || "";
          observer.disconnect();
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return <img ref={imgRef} data-src={src} alt={alt} className={className} />;
};

export default LazyImage;
