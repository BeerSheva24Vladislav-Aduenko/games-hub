import { useEffect, useState } from "react";
import api from "../services/apiClient";
import type { AxiosError } from "axios";

interface AllResponse<T> {
  results: T[];
}

export default function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  useEffect(() => {
    api
      .get<AllResponse<T>>(endpoint)
      .then((res) => setData(res.data.results))
      .catch((error: AxiosError) => setErrorMessage(error.message));
  }, []);
  return { data, errorMessage };
}
