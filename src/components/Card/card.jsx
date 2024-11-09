import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const Card = ({ item }) => {
  return (
    <>
      <Box
        boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        p={"20px"}
        height={"422px"}
        width={"full"}
        borderRadius={"15px"}
      >
        <Box textAlign={"center"}>
          <img style={{ width: "240px" }} src={item.img} alt="#" />
        </Box>
        <Box textAlign={"center"}>
          <Typography variant="h5" mb={"5px"}>
            {item.title}
          </Typography>
          <strong style={{ marginBottom: "5px" }}>{item.price} sum</strong>
          <Typography variant="h6">{item.brand}</Typography>
        </Box>
      </Box>
    </>
  );
};
