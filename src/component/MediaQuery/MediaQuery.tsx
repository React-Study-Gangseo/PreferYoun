import React from "react";
import { useMediaQuery } from "react-responsive";
interface Props {
  children: React.ReactNode;
}
const Mobile: React.FC<Props> = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:896px)",
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const PC: React.FC<Props> = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:897px) ",
  });
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export { Mobile, PC };
