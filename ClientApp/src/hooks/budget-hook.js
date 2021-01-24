import { useState, useEffect } from "react";
import { getBudgetAll, getBudgetById } from "api/budget-api";

export const useBudgetById = (id) => {
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getBudgetById(id).then((res) => {
      setData(res);
      setIsLoading(false);
    }).catch(() => {
      setIsError(true);
      setIsLoading(false);
    });
  }, []);

  return [data, isLoading, isError];
};

export const useBudgetAll = () => {
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getBudgetAll().then((res) => {
      setData(res);
      setIsLoading(false);
    }).catch(() => {
      setIsError(true);
      setIsLoading(false);
    });
  }, []);

  return [data, isLoading, isError];
};

