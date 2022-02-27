import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addToCart } from "../../actions/cartActions";
import { useNavigate } from "react-router-dom";
/**
 * @author
 * @function SideSummary
 **/

const SmallImage = styled("img")(({ theme }) => ({
  width: "10vh",
  height: "10vh",
  "&:hover": { border: "1px solid black" },
}));

const LargeImage = styled("img")(({ theme }) => ({
  width: "60vh",
  height: "62vh",
  paddingTop: "10px",
  paddingBottom: "10px",
}));

const useStyle = makeStyles({
  input1: {
    height: 2,
    width: 55,
    fontSize: 14,
    textAlign: "center",
    justifyContent: "center",
  },
});

export const SideProduct = ({ product }) => {
  const classes = useStyle();
  const [imgNo, setImgNo] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productPhotos = product.productPhotos;

  const addProductToCart = () => {
    const _product = {
      ...product,
      seller: product.createdBy,
    };
    dispatch(addToCart(_product)).then(navigate("/cart"));
  };

  return (
    <Box position={"fixed"} sx={{ width: "80vh" }}>
      <Paper elevation={1}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            {/* image stack */}
            <Stack spacing={0.5} alignItems="center">
              {productPhotos.map((productPhoto, key) => (
                <SmallImage
                  src={productPhoto.img}
                  onClick={() => setImgNo(key)}
                />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={10}>
            {/* image */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <LargeImage src={productPhotos[imgNo].img} />
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          ml={14}
        >
          <Typography sx={{ color: "#878787", fontSize: 14 }}>
            seller : {product.createdBy}
          </Typography>

          <Box
            sx={{
              display: "inline-block",
              allignItems: "center",
            }}
            mr={2}
            mt={1}
            mb={1}
          >
            <IconButton aria-label="delete" size="medium" sx={{ color: "red" }}>
              <FavoriteIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              fullWidth
              startIcon={<AddShoppingCartIcon />}
              sx={{
                allignItems: "center",
                textTransform: "none",
                color: "white",
                fontSize: "16px",
                lineHeight: "3",
                fontWeight: "550",
                backgroundColor: "rgb(169 102 45)",
                "&:hover": {
                  color: "white",
                  backgroundColor: "rgb(169 102 45)",
                },
                "&:active": {
                  color: "white",
                  backgroundColor: "rgb(169 102 45)",
                },
                "&:focus": {
                  color: "white",
                  backgroundColor: "rgb(169 102 45)",
                },
              }}
              onClick={addProductToCart}
            >
              Add to Cart
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              startIcon={<LocalMallIcon />}
              sx={{
                allignItems: "center",
                textTransform: "none",
                color: "white",
                fontSize: "16px",
                lineHeight: "3",
                fontWeight: "550",
                backgroundColor: "rgb(169 129 45)",
                "&:hover": {
                  color: "white",
                  backgroundColor: "rgb(169 129 45)",
                },
                "&:active": {
                  color: "white",
                  backgroundColor: "rgb(169 129 45)",
                },
                "&:focus": {
                  color: "white",
                  backgroundColor: "rgb(169 129 45)",
                },
              }}
            >
              Buy Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
