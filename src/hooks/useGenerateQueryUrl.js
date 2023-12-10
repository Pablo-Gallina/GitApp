import { useState, useEffect } from "react";

const useGenerateQueryUrl = (urlApi, params, dataPerPage = 10) => {
  const [queryUrl, setQueryUrl] = useState("");

  useEffect(() => {
    const generateQueryUrl = () => {
      const baseUrl = `${urlApi}?q=is:pr`;
      const perPage = `&per_page=${dataPerPage}`;

      // Construir la URL de la consulta a partir de los parámetros
      const queryParams = Object.keys(params)
        .map((key) => `${key}:${params[key]}`)
        .join("+");

      const url = `${baseUrl}+${queryParams}${perPage}`;
      setQueryUrl(url);
    };

    generateQueryUrl();
  }, [params]);

  return queryUrl;
};

export default useGenerateQueryUrl;
