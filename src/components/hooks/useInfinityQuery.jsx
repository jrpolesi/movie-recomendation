import { useEffect, useState } from "react";

export function useInfinityQuery(queryFn, options) {
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 0,
    totalResults: 0,
  });
  const [data, setData] = useState(null);
  const [state, setState] = useState({ isLoading: false, error: null });

  useEffect(() => {
    setState({ isLoading: true, error: null });
    queryFn({ ...options, page: pagination.page })
      .then(({ body }) => {
        const { page, total_pages, total_results, results } = body;
        setPagination({
          page,
          totalPages: total_pages,
          totalResults: total_results,
        });
        setData((prevData) => [...prevData, ...results]);
        setState({ isLoading: false, error: null });
      })
      .catch((error) => {
        setState({ isLoading: false, error });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(options), pagination.page, queryFn]);

  function fetchNextPage() {
    setPagination((prev) => ({
      ...prev,
      page: Math.min(prev.page + 1, prev.totalPages),
    }));
  }

  return {
    pagination: {
      page: pagination.page,
      totalPages: pagination.totalPages,
      hasNextPage: pagination.page < pagination.totalPages,
      totalResults: pagination.totalResults,
      fetchNextPage,
    },
    data,
    isLoading: state.isLoading,
    error: state.error,
  };
}