import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";

interface productDataType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface AllProductLoaderProps {
  children: ReactNode;
  resourceName: string;
}

const AllProductLoader = ({
  children,
  resourceName,
}: AllProductLoaderProps) => {
  const [productData, setProductData] = useState<productDataType[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProductData(data);
      } catch (err) {
        setError(err as string);
      }
    };

    fetchData();
  }, []);

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
