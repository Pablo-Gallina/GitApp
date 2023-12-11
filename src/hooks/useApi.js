import { useState, useEffect } from "react";
import axios from "axios";
import { Config } from "../services/config";

const useApi = (url, method = "get") => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const fullUrl = `${Config.githubApiUrl}${url}`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios({
        method,
        url: fullUrl,
        headers: { Authorization: `Bearer ${Config.githubAccessToken}` },
      });

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url && !data) {
      fetchData();
    }
  }, [url, method, data]);

  return { data, isLoading };
};

export default useApi;
