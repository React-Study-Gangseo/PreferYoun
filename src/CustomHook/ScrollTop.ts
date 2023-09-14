import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const scrollPositions = useRef<Record<string, number>>({});

  // 현재 스크롤 위치 저장
  useLayoutEffect(() => {
    if (["/", "/buyer", "/seller"].includes(location.pathname)) {
      setTimeout(() => {
        scrollPositions.current[location.key as string] = window.scrollY;
        sessionStorage.setItem(
          "Position",
          scrollPositions.current[location.key as string].toString()
        );
      }, 0);
    }
  }, [location]);

  // 페이지 이동 시 스크롤 위치 복원 또는 맨 위로 이동
  useEffect(() => {
    if (
      ["/", "/buyer", "/seller"].includes(location.pathname) &&
      sessionStorage.getItem("Position") !== null
    ) {
      const historyPosition = sessionStorage.getItem("Position");
      window.scrollTo(0, Number(historyPosition));
    } else {
      window.scrollTo(0, 0);
    }

    // return () => {
    //   // 페이지를 벗어날 때 세션스토리지의 Position 항목 제거
    //   sessionStorage.removeItem("Position");
    // };
  }, [location]);

  return null;
};

export default ScrollToTop;
