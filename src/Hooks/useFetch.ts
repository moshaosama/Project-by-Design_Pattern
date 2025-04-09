import axios from "axios";
import { useState, useEffect } from "react";
import { productDataType } from "../Components/Shared/AllProductLoader";

const useFetch = (url: string) => {
  const [productData, setProductData] = useState<productDataType[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setProductData(data);
      } catch (err) {
        setError(err as string);
      }
    };

    fetchData();
  }, []);

  return { productData, error };
};

export default useFetch;
