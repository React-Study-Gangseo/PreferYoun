import React, { createContext, useState } from "react";

interface TotalPriceContextProps {
  totalPrice: number;
  setTotalPrice: (price: number) => void;
}

export const TotalPriceContext = createContext<TotalPriceContextProps>({
  totalPrice: 0,
  setTotalPrice: () => {},
});

export default function PriceProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
      {children}
    </TotalPriceContext.Provider>
  );
}
