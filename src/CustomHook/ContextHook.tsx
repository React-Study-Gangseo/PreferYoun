import React, { createContext, useState, useContext } from "react";
import { totalPrice } from "types/type";

// 1. 새로운 context를 생성합니다.
const QuantityContext = createContext<totalPrice>({
  count: 1,
  setCount: (value: number) => {},
});

// Custom hook을 만들어서 간편하게 context 값을 가져올 수 있도록 합니다.
export function useQuantity() {
  const context = useContext(QuantityContext);

  if (!context) {
    throw new Error("Cannot find CountProvider");
  }

  return context;
}

export default function ContextHook({ children }: any) {
  const [count, setCount] = useState(1);

  // Provider 컴포넌트를 생성합니다.
  // Provider 컴포넌트 내부의 하위 컴포넌트들은 상태 변경 함수(setCount)와 상태(count)에 접근할 수 있습니다.
  return (
    <QuantityContext.Provider value={{ count: count, setCount: setCount }}>
      {children}
    </QuantityContext.Provider>
  );
}
