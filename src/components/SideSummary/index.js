import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import { Box, Paper } from "@mui/material";

/**
 * @author
 * @function SideSummary
 **/

export const SideSummary = (props) => {
  const cartSumary = props.cartSumary;
  console.log(cartSumary);
  return (
    <Box position={"fixed"} sx={{ width: "50vh" }}>
      <Paper elevation={3}>
        <Box>
          <Typography
            p={2}
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: "#878787",
              textTransform: "uppercase",
            }}
          >
            Price Details
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ height: "100%" }}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={1}
            mb={2}
          >
            <Typography>Price ({cartSumary.cartLength} items)</Typography>
            <Typography>{cartSumary.totalPrice}</Typography>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={1}
            mb={2}
          >
            <Typography>Discount</Typography>
            <Typography>{cartSumary.discount}</Typography>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={1}
            mb={5}
          >
            <Typography>Delivery Charges</Typography>
            <Typography color={"green"}>Free</Typography>
          </Box>
          <Divider />
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={3}
            mb={3}
          >
            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
              Total Amount
            </Typography>
            <Box sx={{ display: "flex" }}>
              <CurrencyRupeeRoundedIcon
                sx={{ fontSize: 25, fontWeight: 600 }}
              />
              <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                {cartSumary.totalPrice}
              </Typography>
            </Box>
          </Box>
          <Divider />

          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={1}
            mb={1}
          >
            <Typography sx={{ fontSize: 16, color: "green" }}>
              You will receive reward on every order
            </Typography>
          </Box>
          <Divider />
        </Box>
      </Paper>
    </Box>
  );
};
