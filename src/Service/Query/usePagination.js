import { useQuery } from "@tanstack/react-query";
import { request } from "../../Config/request";

export const usePagination = () => {
  return useQuery({
    queryKey: ["Update", page],
    queryFn: () =>
      request
        .get("/phones", {
          params: {
            _limit: 6,
            _page: page,
          },
        })
        .then((res) => res.data),
  });
};
