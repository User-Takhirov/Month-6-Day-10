import { useQuery } from "@tanstack/react-query";
import { request } from "../../Config/request";

export const useCompSearch = (input = "") => {
  return useQuery({
    queryKey: ["search", input],
    queryFn: () =>
      request
        .get("/computer", {
          params: {
            title_like: input ? input : "00000",
          },
        })
        .then((res) => res.data),
  });
};
