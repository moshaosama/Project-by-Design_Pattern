import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";

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
  const [productdata, setproductData] = useState<productDataType | {}>({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setproductData(data);
      } catch (err) {
        setError(err as string);
      }
    };
    fetchData();
  }, []);

  return error ? (
    <p className="text-red-500">{error}</p>
  ) : (
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          [resourceName]: productdata,
        });
      }
      return child;
    })
  );
};

export default ProductByIdLoader;
