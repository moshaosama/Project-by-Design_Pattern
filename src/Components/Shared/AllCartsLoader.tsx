import React, { ReactNode } from "react";
import useFetch from "../../Hooks/useFetch";

interface AllCartsLoaderProps {
  children: ReactNode;
  resourceName: string;
}

const AllCartsLoader = ({ children, resourceName }: AllCartsLoaderProps) => {
  const { productData, error } = useFetch("https://fakestoreapi.com/carts");

  return error ? (
    <h1 className="text-red-500">{error}</h1>
  ) : (
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          [resourceName]: productData,
        });
      }
    })
  );
};

export default AllCartsLoader;
