import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Product } from "./useProducts";

interface FetchResponse<T> {
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<T[]>("https://api.escuelajs.co/api/v1" + endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();

    // let componentMounted = true;
    // const getData = async () => {
    //   setLoading(true);

    //   const response = await fetch(
    //     "https://api.escuelajs.co/api/v1" + endpoint
    //   );
    //   if (componentMounted) {
    //     const data = await response.json();
    //     setData(data);
    //     setLoading(false);
    //   }
    //   return () => {
    //     componentMounted = false;
    //     setLoading(false);
    //   };
    // };
    // getData();
  }, []);
  return { data, error, isLoading };
};

export default useData;
