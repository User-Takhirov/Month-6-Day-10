import { Box, Container, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Box textAlign={"center"} py={"10px"} bgcolor={"black"} color={"blue"}>
        <Container>
          <Typography variant="h3">Header</Typography>
        </Container>
      </Box>
      <Box>
        <Stack bgcolor={"#0e1a72"} py={"10px"} mb={"30px"}>
          <Container>
            <Stack direction={"row"} gap={"20px"}>
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="h5">Phone</Typography>
              </Link>
              <Link
                to={"/computer"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant="h5">Computer</Typography>
              </Link>
            </Stack>
          </Container>
        </Stack>
      </Box>
    </>
  );
};
