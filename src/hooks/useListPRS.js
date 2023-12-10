import useApi from "./useApi";
import useGenerateQueryUrl from "./useGenerateQueryUrl";

const useListPRS = ({ state }) => {
  const url = useGenerateQueryUrl("/search/issues", {
    author: "PabloGallinaG",
    state,
  });
  const { data, isLoading } = useApi(url);
  const { items = [] } = data || {};
  const isEmpty = items?.length === 0;

  return { items, isLoading, isEmpty };
};

export default useListPRS;
