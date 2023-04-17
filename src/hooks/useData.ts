import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T>{
    count: number;
    results: T[]
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((response) => {
        setLoading(false);
        setData(response.data.results);
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
