import { useState, useEffect } from "react"
import { getProducts } from "../api/product-api";

export const useProducts = () => {
  const [products, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((data) => {
      setData(data);
      setIsLoading(false);
    }).catch(() => {
      setIsError(true);
      setIsLoading(false);
    });
  }, []);

  return [products, isLoading, isError];
};
