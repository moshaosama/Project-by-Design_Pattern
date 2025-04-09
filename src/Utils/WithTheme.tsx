import React from "react";
import useChangebyTheme from "../Hooks/useChangebyTheme";

interface newComponentProps {
  [key: string]: any;
}

const WithTheme = (Compoennt: React.ComponentType<any>) => {
  return ({ ...props }: newComponentProps) => {
    return (
      <div
        className={`${useChangebyTheme(
          "bg-gray-400 text-black",
          "bg-black text-white"
        )}`}
      >
        <Compoennt {...props} />
      </div>
    );
  };
};

export default WithTheme;
