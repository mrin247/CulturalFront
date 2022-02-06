import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";

/**
 * @author
 * @function ProductCard
 **/
const Image = styled("img")(({ theme }) => ({
  width: "30vh",
  height: "40vh",
}));

export const ProductCard = (props) => {
  return (
    <Paper elevatiion={3} sx={{backgroundColor:"#dcdde1"}}>
        <Box p={1}>
        <Image src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70" />

        </Box>
      <Box m={1}>
        <Typography>Seller name</Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
          Product name
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Ratings</Typography>
          <Typography>Total Orders</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Price</Typography>
          <Typography>Offer</Typography>
        </Box>
      </Box>
    </Paper>
  );
};
