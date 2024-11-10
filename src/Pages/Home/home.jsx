import {
  Box,
  Button,
  Container,
  Grid2,
  Typography,
  Stack,
  Skeleton,
} from "@mui/material";
import React from "react";
import { useGetPhoneProducts } from "../../Service/Query/useGetPhoneProducts";
import { Card } from "../../components/Card/card";
import { PhoneSearch } from "../../components/usePhoneSearch/usePhoneSearch";
export const Home = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetPhoneProducts(page);

  return (
    <>
      <PhoneSearch />
      <Container maxWidth={"lg"}>
        <Box>
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
              <Stack
                my={"50px"}
                direction={"row"}
                gap={"10px"}
                justifyContent={"center"}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ borderRadius: "5px" }}
                  width={"63px"}
                  height={"36px"}
                />
                <Skeleton
                  variant="rectangular"
                  sx={{ borderRadius: "5px" }}
                  width={"63px"}
                  height={"36px"}
                />
                <Skeleton
                  variant="rectangular"
                  sx={{ borderRadius: "5px" }}
                  width={"63px"}
                  height={"36px"}
                />
                <Skeleton
                  variant="rectangular"
                  sx={{ borderRadius: "5px" }}
                  width={"63px"}
                  height={"36px"}
                />
                <Skeleton
                  variant="rectangular"
                  sx={{ borderRadius: "5px" }}
                  width={"63px"}
                  height={"36px"}
                />
                <Skeleton
                  variant="rectangular"
                  sx={{ borderRadius: "5px" }}
                  width={"63px"}
                  height={"36px"}
                />
              </Stack>
            </Box>
          ) : (
            <Box>
              <Grid2 container spacing={"40px"}>
                {data?.data?.map((item) => (
                  <Grid2 size={4} key={item.id}>
                    <Card item={item} />
                  </Grid2>
                ))}
              </Grid2>
              <Stack
                my={"50px"}
                direction={"row"}
                gap={"10px"}
                justifyContent={"center"}
              >
                {[...Array(6)].map((_, index) => (
                  <Button
                    sx={{
                      bgcolor: `${page == index + 1 ? "red" : "blue"}`,
                    }}
                    variant="contained"
                    onClick={() => setPage(index + 1)}
                    key={index}
                  >
                    {index + 1}
                  </Button>
                ))}
              </Stack>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};
