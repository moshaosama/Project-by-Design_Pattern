import { useEffect, useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 500);
  }, []);

  return { loading };
};

export default useLoading;
