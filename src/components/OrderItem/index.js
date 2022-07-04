/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import React, { useState } from "react";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * @author
 * @function CardProduct
 **/

const StyledButton = styled(Button)(({ theme }) => ({
  color: "Black",
  fontSize: "16px",
  fontWeight: "550",
  marginRight: "5px",
  backgroundColor: "white",
  "&:hover": {
    color: "rgb(169 129 45)",
    backgroundColor: "white",
  },
  "&:active": {
    color: "rgb(169 129 45)",
    backgroundColor: "white",
  },
  "&:focus": {
    color: "rgb(169 129 45)",
    backgroundColor: "white",
  },
}));

const useStyle = makeStyles({
  input1: {
    height: 3,
    width: 15,
    fontSize: 12,
  },
  img: {
    height: 130,
    width: 140,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export const OrderItem = (props) => {
  const classes = useStyle();
  const location = useLocation();
  const order = props.order;
  console.log(order);
  const cartItem = order;

  return (
    <>
      <Box mt={3} ml={3} mr={3} mb={1}>
        <Box>
          {order.items.map((orderItem) => (
            <Grid container spacing={1} mb={2}>
              <Grid item xs={2}>
                <img
                  className={classes.img}
                  src={
                    orderItem.productId.productPhotos.length > 0
                      ? orderItem.productId.productPhotos[0].img
                      : ""
                  }
                />
                {/* <img src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70" /> */}
              </Grid>
              <Grid item xs={6}>
                <Box m={1} ml={3}>
                  <Typography
                    sx={{
                      cursor: "pointer",
                      fontSize: 16,
                      "&:hover": {
                        color: "rgb(169 129 45)",
                      },
                    }}
                  >
                    {orderItem.productId.name}
                  </Typography>
                  <Typography sx={{ color: "#878787", fontSize: 14 }}>
                    seller : {orderItem.sellerId.firstName}
                  </Typography>
                  <Typography
                    sx={{
                      cursor: "pointer",
                      fontSize: 16,
                      "&:hover": {
                        color: "rgb(169 129 45)",
                      },
                    }}
                  >
                    Quantity: {orderItem.purchasedQty}
                    <Typography>Payment Type: {order.paymentType}</Typography>
                  </Typography>
                  <Box mt={2} sx={{ display: "flex" }}>
                    <CurrencyRupeeRoundedIcon />
                    <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                      {orderItem.payablePrice}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box m={1}>
                  <Stepper
                    activeStep={
                      orderItem.orderStatus.findIndex(
                        (val) => val.isCompleted === true
                      ) + 1
                    }
                    alternativeLabel
                  >
                    {orderItem.orderStatus.map((label) => (
                      <Step key={label.type}>
                        <StepLabel>{label.type}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </>
  );
};
