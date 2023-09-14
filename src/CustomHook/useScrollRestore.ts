import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const useScrollRestoration = (): void => {
  const location = useLocation();
  const scrollPositions = useRef<Record<string, number>>({});

  useLayoutEffect(() => {
    // 현재 스크롤 위치 저장
    scrollPositions.current[location.key as string] = window.scrollY;

    // 이전 페이지로 돌아갔을 때, 저장된 스크롤 위치로 복원
    const restoreScrollPosition = () => {
      if (scrollPositions.current[location.key as string] !== undefined) {
        window.scrollTo(0, scrollPositions.current[location.key as string]);
      }
    };

    restoreScrollPosition();
  }, [location]);
};

export default useScrollRestoration;
