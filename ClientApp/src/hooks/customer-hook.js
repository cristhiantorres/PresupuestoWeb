import { useState, useEffect } from "react"
import { getCustomers } from "../api/customer-api";

export const useCustomers = () => {
  const [customers, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCustomers().then((data) => {
      setData(data);
      setIsLoading(false);
    }).catch(() => {
      setIsError(true);
      setIsLoading(false);
    });
  }, []);

  return [customers, isLoading, isError];
};
