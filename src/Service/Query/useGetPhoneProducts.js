import { useQuery } from "@tanstack/react-query";
import { request } from "../../Config/request";
export const useGetPhoneProducts = (page = 1) => {
  return useQuery({
    queryKey: ["Phone", page],
    queryFn: () =>
      request
        .get("/phones", {
          params: {
            _limit: 6,
            _page: page,
          },
        })
        .then((res) => {
          const data = res.data;
          const countData = res?.headers.get("X-Total-Count");
          const pageSize = countData
            ? countData % 6 !== 0
              ? Math.round((Number(countData) + 1) / 6)
              : Math.round(Number(countData) / 6)
            : 0;
          return { data, pageSize };
        }),
  });
};
