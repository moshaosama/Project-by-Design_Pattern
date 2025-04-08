import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";

interface productDataType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

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
