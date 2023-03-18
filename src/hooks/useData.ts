import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true;
    const getData = async () => {
      setLoading(true);

      const response = await fetch(
        "https://api.escuelajs.co/api/v1" + endpoint
      );
      if (componentMounted) {
        const data = await response.json();
        setData(data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
        setLoading(false);
      };
    };
    getData();
  }, []);
  return { data, error, isLoading };
};

export default useData;
