import { Box, Container, Grid2, Skeleton, Stack } from "@mui/material";
import React from "react";
import { useGetCompProducts } from "../../Service/Query/useGetCompProduct";
import { Card } from "../../components/Card/card";
import { useInView } from "react-intersection-observer";

export const Computers = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetCompProducts();
  const { ref, inView } = useInView();
  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <>
      <Container sx={{ mb: "50px" }}>
        {isLoading ? (
          <Box>
            <Grid2 container spacing={"40px"}>
              <Stack gap={"40px"} size={4} direction={"row"}>
                <Skeleton
                  sx={{ borderRadius: "15px" }}
                  variant="rectangular"
                  width={"357px"}
                  height={"420px"}
                />
                <Skeleton
                  sx={{ borderRadius: "15px" }}
                  variant="rectangular"
                  width={"357px"}
                  height={"420px"}
                />
                <Skeleton
                  sx={{ borderRadius: "15px" }}
                  variant="rectangular"
                  width={"357px"}
                  height={"420px"}
                />
              </Stack>
              <Stack gap={"40px"} size={4} direction={"row"}>
                <Box>
                  <Skeleton
                    sx={{ borderRadius: "15px" }}
                    variant="rectangular"
                    width={"357px"}
                    height={"420px"}
                  />
                </Box>
                <Box>
                  <Skeleton
                    sx={{ borderRadius: "15px" }}
                    variant="rectangular"
                    width={"357px"}
                    height={"420px"}
                  />
                </Box>
                <Skeleton
                  sx={{ borderRadius: "15px" }}
                  variant="rectangular"
                  width={"357px"}
                  height={"420px"}
                />
              </Stack>
            </Grid2>
          </Box>
        ) : (
          <Grid2 container spacing={"40px"}>
            {data?.pages.map((page) =>
              page.map((item) => (
                <Grid2 size={4} key={item.id}>
                  <Card item={item} />
                </Grid2>
              ))
            )}
          </Grid2>
        )}
        {hasNextPage ? <h1 ref={ref}>Loading...</h1> : ""}
      </Container>
    </>
  );
};
