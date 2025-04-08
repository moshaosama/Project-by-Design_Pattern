import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";

export interface productDataType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface AllProductLoaderProps {
  children: ReactNode;
  resourceName: string;
}

const AllProductLoader = ({
  children,
  resourceName,
}: AllProductLoaderProps) => {
  const { error, productData } = useFetch("https://fakestoreapi.com/products");
  return error ? (
    <p className="text-red-500 text-xl font-bold">{error}</p>
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

export default AllProductLoader;
