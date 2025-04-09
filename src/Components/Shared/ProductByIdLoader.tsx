
import React, { ReactNode } from "react";
import useFetch from "../../Hooks/useFetch";


interface ProductByIdLoaderProps {
  children: ReactNode;
  productId: number;
  resourceName: string;
}

const ProductByIdLoader = ({
  children,
  productId,
  resourceName,
}: ProductByIdLoaderProps) => {
  const { error, productData } = useFetch(
    `https://fakestoreapi.com/products/${productId}`
  );

  return error ? (
    <p className="text-red-500">{error}</p>
  ) : (
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          [resourceName]: productData,
        });
      }
      return child;
    })
  );
};

export default ProductByIdLoader;
