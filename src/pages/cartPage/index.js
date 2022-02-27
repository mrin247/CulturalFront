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

/**
 * @author
 * @function CartPage
 **/

export const CartPage = (props) => {
  const dispatch = useDispatch();
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
                      My Cart (2)
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

                  <Box p={2} sx={{ textAlign: "center", display: "flex" }}>
                    {cartItems.length > 0 ? (
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
                      >
                        Place order
                      </Button>
                    ) : (
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
                      >
                        Shop Now
                      </Button>
                    )}
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <SideSummary />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};
