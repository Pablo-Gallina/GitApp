import { useQuery } from "react-query";
import axios from "axios";
import { Config } from "../services/config";

const useApi = (url, method = "get") => {
  const fullUrl = `${Config.githubApiUrl}${url}`;

  const fetchData = async () => {
    const response = await axios({
      method,
      url: fullUrl,
      headers: { Authorization: `Bearer ${Config.githubAccessToken}` },
    });

    return response.data;
  };

  return useQuery([url, method], fetchData, {
    refetchOnWindowFocus: false,
  });
};

export default useApi;
