import { useEffect, useState } from "react";
import api from "../services/apiClient";
import type { AxiosError, AxiosRequestConfig } from "axios";

interface AllResponse<T> {
  results: T[];
}

export default function useFetchData<T>(
  endpoint: string,
  config?: AxiosRequestConfig,
  deps?: any[]
): {
  data: T[];
  errorMessage: string;
  isLoading: boolean;
} {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  useEffect(() => {
    api
      .get<AllResponse<T>>(endpoint, config)
      .then((res) => setData(res.data.results))
      .catch((error: AxiosError) => setErrorMessage(error.message))
      .finally(() => setIsLoading(false));
    setIsLoading(true);
  },deps || []);
  return { data, errorMessage, isLoading };
}
