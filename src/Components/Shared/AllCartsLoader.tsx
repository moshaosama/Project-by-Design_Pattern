import React, { ReactNode, useEffect, useState } from "react";

interface AllCartsLoaderState {
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
}
[];

interface AllCartsLoaderProps {
  children: ReactNode;
  resourceName: string;
}

const AllCartsLoader = ({ children, resourceName }: AllCartsLoaderProps) => {
  const [cartData, setCartData] = useState<AllCartsLoaderState | []>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCartData(data);
      });
  }, []);

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        [resourceName]: cartData,
      });
    }
  });
};

export default AllCartsLoader;
