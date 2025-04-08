import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";

interface DataLoaderProps {
  children: ReactNode;
  resourceName: string;
}

const DataLoader = ({ children, resourceName }: DataLoaderProps) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProductData(data);
    };

    fetchData();
  }, []);

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        [resourceName]: productData,
      });
    }
    return child;
  });
};

export default DataLoader;
