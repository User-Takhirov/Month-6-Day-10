import { useQuery } from "@tanstack/react-query";
import { request } from "../../Config/request";

export const usePhoneSearch = (input = "") => {
  return useQuery({
    queryKey: ["search", input],
    queryFn: () =>
      request
        .get("/phones", {
          params: {
            title_like: input ? input : "00000",
          },
        })
        .then((res) => res.data),
  });
};
