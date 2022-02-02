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
import React from "react";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";

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
});

export const CardProduct = (props) => {
  const classes = useStyle();
  return (
    <>
      <Box mt={3} ml={3} mr={3} mb={1}>
        <Box sx={{ display: "flex" }}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <img src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70" />
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
                  Product Name halkfyewgrbjhbhgf
                </Typography>
                <Typography sx={{ color: "#878787", fontSize: 14 }}>
                  seller : store Name
                </Typography>
                <Box mt={8} sx={{ display: "flex" }}>
                  <CurrencyRupeeRoundedIcon />
                  <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    54556
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
              <IconButton aria-label="delete">
                <RemoveRoundedIcon
                  sx={{ border: "1px solid black", borderRadius: "50%" }}
                />
              </IconButton>
              <TextField
                variant="outlined"
                InputProps={{ classes: { input: classes.input1 } }}
              />
              <IconButton aria-label="add">
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
              <StyledButton>Save for later</StyledButton>
              <StyledButton>Remove</StyledButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider light />
    </>
  );
};
