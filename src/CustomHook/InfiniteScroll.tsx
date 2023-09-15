import React, { useRef } from "react";

export default function useInfiniteScroll(callback: any) {
  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 0.5 }
    )
  );
  const observe = (element: any) => {
    observer.current.observe(element);
  };
  const unobserve = (element: any) => {
    observer.current.unobserve(element);
  };
  return [observe, unobserve];
}
