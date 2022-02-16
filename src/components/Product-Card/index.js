import { Box, Divider, Paper, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarRateIcon from "@mui/icons-material/StarRate";
/**
 * @author
 * @function ProductCard
 **/
const Image = styled("img")(({ theme }) => ({
  width: "30vh",
  height: "40vh",
}));

export const ProductCard = ({ product }) => {
  const imageSrc =
    product.productPhotos.length > 0
      ? product.productPhotos[0].img
      : "https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70";
  return (
    <Paper elevatiion={24} sx={{ cursor: "pointer" }}>
      <Box p={1}>
        <Box sx={{ textAlign: "center" }}>
          <Box p={1}>
            <Image src={imageSrc} />
          </Box>
        </Box>
        <Box m={1}>
          <Typography sx={{ color: "rgb(177 177 177)" }}>
            Seller name
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            {product.name}
          </Typography>
          <Box sx={{ display: "flex", textAllign: "center" }}>
            <Typography
              sx={{
                lineHeight: "normal",
                display: "inline-block",
                color: " #fff",
                padding: "2px 4px 2px 6px",
                borderRadius: "3px",
                fontWeight: 500,
                fontSize: "14px",
                verticalAlign: "middle",
                backgroundColor: "#388e3c",
              }}
            >
              4.4
              <StarRateIcon fontSize="inherit" />
            </Typography>
            <Typography pl={2} sx={{ color: "#878787" }}>
              (Total Orders)
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", textAllign: "center" }}>
              <CurrencyRupeeIcon fontSize="inherit" />
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                {product.price}
              </Typography>
            </Box>

            <Typography pl={2} sx={{ color: "green" }}>
              74% Off
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
