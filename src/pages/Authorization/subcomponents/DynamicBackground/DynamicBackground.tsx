import { FC } from "react";
import { BackgroundRoot } from "./DynamicBackground.style";

type Props = {
  children: React.ReactNode;
};
const DynamicBackground: FC<Props> = ({ children }) => {
  return <BackgroundRoot>{children}</BackgroundRoot>;
};

export default DynamicBackground;
