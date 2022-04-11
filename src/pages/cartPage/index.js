import { Box, Button, Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardProduct } from "../../components/CartProduct";
import { Layout } from "../../components/Layout";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import { SideSummary } from "../../components/SideSummary";
import {
  addToCart,
  getCartItems,
  removeCartItem,
} from "../../actions/cartActions";
import { useNavigate } from "react-router-dom";

/**
 * @author
 * @function CartPage
 **/

export const CartPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const [cartItems, setCartItems] = useState(cart.cartItems);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);
  //console.log(cart.cartItems);

  const onQuantityIncrement = (_id, qty) => {
    //console.log({_id, qty});
    const { name, price, img, seller } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img, seller }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, price, img, seller } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img, seller }, -1));
  };

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };

  console.log(cart.cartItems);
  let cartLength = 0;
  let totalPrice = 0;
  Object.keys(cartItems).map((key, index) => {
    totalPrice = totalPrice + cartItems[key].price * cartItems[key].qty;
  });

  cartLength = Object.keys(cartItems).length;

  const cartSumary = {
    cartLength,
    totalPrice,
    discount: 0,
  };

  return (
    <Layout>
      <Container maxWidth="xl">
        <Box ml={13} mr={13} mt={10} mb={10}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Paper elevation={3}>
                <Box sx={{ bgcolor: "white" }}>
                  <Box>
                    <Typography p={2} sx={{ fontSize: 16, fontWeight: 600 }}>
                      My Cart ({cartLength})
                    </Typography>
                  </Box>
                  <Divider />
                  {Object.keys(cartItems).map((key, index) => (
                    <CardProduct
                      key={index}
                      cartItem={cartItems[key]}
                      onQuantityInc={onQuantityIncrement}
                      onQuantityDec={onQuantityDecrement}
                      onRemoveCartItem={onRemoveCartItem}
                    />
                  ))}
                  {cartLength > 0 ? (
                    <Box p={2} sx={{ textAlign: "center", display: "flex" }}>
                      <Button
                        sx={{
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "500",
                          marginRight: "5px",
                          marginLeft: "auto",
                          padding: "10px 50px 10px 50px",
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
                        onClick={() => navigate("/checkout")}
                      >
                        Place order
                      </Button>
                    </Box>
                  ) : (
                    <Box p={2} sx={{ textAlign: "center", display: "flex" }}>
                      <Button
                        sx={{
                          color: "rgb(169 129 45)",
                          textTransform: "none",
                          fontSize: "14px",
                          fontWeight: "500",
                          marginRight: "5px",
                          marginLeft: "auto",
                          padding: "10px 50px 10px 50px",
                        }}
                        onClick={() => navigate("/")}
                      >
                        Add Items to cart
                      </Button>
                    </Box>
                  )}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <SideSummary cartSumary={cartSumary} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};
