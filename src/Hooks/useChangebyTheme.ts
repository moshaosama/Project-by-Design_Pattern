import useTheme from "./useTheme";

const useChangebyTheme = (lightValue: string, darkValue: string) => {
  const { theme } = useTheme();

  return theme == "light" ? lightValue : darkValue;
};

export default useChangebyTheme;
