import axios from "axios";
import { useEffect, useState } from "react";
import ProductIInfo from "../ProductIInfo";

const DataLoader = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProductData(data);
    };

    fetchData();
  }, []);

  return <ProductIInfo product={productData} />;
};

export default DataLoader;
