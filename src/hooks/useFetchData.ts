import { useEffect, useState } from "react";
import api from "../services/apiClient";
import type { AxiosError } from "axios";

interface AllResponse<T> {
  results: T[];
}

export default function useFetchData<T>(endpoint: string): {
  data: T[];
  errorMessage: string;
  isLoading: boolean;
} {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  useEffect(() => {
    api
      .get<AllResponse<T>>(endpoint)
      .then((res) => setData(res.data.results))
      .catch((error: AxiosError) => setErrorMessage(error.message))
      .finally(() => setIsLoading(false));
    setIsLoading(true);
  }, []);
  return { data, errorMessage, isLoading };
}
