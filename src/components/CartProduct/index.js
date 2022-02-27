/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
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
    height: 150,
    width: 140,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export const CardProduct = (props) => {
  const classes = useStyle();
  const location = useLocation();
  const cartItem = props.cartItem;
  console.log(cartItem);

  const [qty, setQty] = useState(props.cartItem.qty);

  const onQuantityIncrement = () => {
    setQty(qty + 1);
    props.onQuantityInc(props.cartItem._id, qty + 1);
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    props.onQuantityDec(props.cartItem._id, qty - 1);
  };
  return (
    <>
      <Box mt={3} ml={3} mr={3} mb={1}>
        <Box sx={{ display: "flex" }}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <img className={classes.img} src={cartItem.img} />
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
                  {cartItem.name}
                </Typography>
                <Typography sx={{ color: "#878787", fontSize: 14 }}>
                  seller : {cartItem.seller}
                </Typography>
                <Box mt={8} sx={{ display: "flex" }}>
                  <CurrencyRupeeRoundedIcon />
                  <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    {cartItem.price}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box m={1}>
                <Typography>Delivery in 2-3 days</Typography>
                <Typography sx={{ color: "#878787", fontSize: 14 }} mt={2}>
                  10 Days Replacement Policy
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Box sx={{ display: "flex", alignItems: "center" }} mt={1} mb={1}>
              <IconButton aria-label="delete" onClick={onQuantityDecrement}>
                <RemoveRoundedIcon
                  sx={{ border: "1px solid black", borderRadius: "50%" }}
                />
              </IconButton>
              <TextField
                variant="outlined"
                InputProps={{ classes: { input: classes.input1 } }}
                value={qty}
              />
              <IconButton aria-label="add" onClick={onQuantityIncrement}>
                <AddRoundedIcon
                  sx={{ border: "1px solid black", borderRadius: "50%" }}
                />
              </IconButton>
            </Box>
          </Grid>

          <Grid item spacing={10}>
            <Box
              sx={{ display: "flex", alignItems: "center" }}
              mt={1}
              mb={1}
              ml={3}
            >
              {location.pathname === "/cart" ? (
                <StyledButton>Save for later</StyledButton>
              ) : null}
              <StyledButton
                onClick={() => props.onRemoveCartItem(props.cartItem._id)}
              >
                Remove
              </StyledButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider light />
    </>
  );
};
