import { ReactElement } from "react";
import useTheme from "./useTheme";

const useChangebyTheme = (
  lightValue: string | ReactElement,
  darkValue: string | ReactElement
) => {
  const { theme } = useTheme();

  return theme == "light" ? lightValue : darkValue;
};

export default useChangebyTheme;
