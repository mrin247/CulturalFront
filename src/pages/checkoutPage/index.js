import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { SideSummary } from "../../components/SideSummary";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CampaignIcon from "@mui/icons-material/Campaign";
import StarIcon from "@mui/icons-material/Star";

import { Address } from "../../components/Address";
import { AddressModal } from "../../components/AddressModal";
import { CardProduct } from "../../components/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getCartItems,
  removeCartItem,
} from "../../actions/cartActions";
import { getAddress } from "../../actions/addressActions";
import { signin } from "../../actions/authActions";
/**
 * @author
 * @function CheckoutPage
 **/

const StyledContinueButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  padding: "10px 50px",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  backgroundColor: "#a9812d",
  "&:hover": {
    backgroundColor: "#a9812d",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#a9812d",
  },
}));

export const CheckoutPage = (props) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const address = useSelector((state) => state.address);

  const [cartItems, setCartItems] = useState(cart.cartItems);
  const [addresses, setAddresses] = useState(address.address);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [addressStep, setAddressStep] = useState(false);
  const [orderStep, setOrderStep] = useState(false);
  const [paymentStep, setPaymentStep] = useState(false);

  const [addressSummary, setAddressSummary] = useState();
  const [orderSummary, setOrderSummary] = useState();
  const [paymentSummary, setPaymentSummary] = useState();

  console.log(addressSummary);

  const backToAddress = () => {
    setAddressStep(true);
    setOrderStep(false);
    setPaymentStep(false);
    setAddressSummary();
    setOrderSummary();
  };

  const backToOrder = () => {
    setOrderStep(true);
    setPaymentStep(false);

    setOrderSummary();
  };

  const confirmOrder = () => {
    setOrderSummary(Object.keys(cartItems).length);
    setOrderStep(false);
    setPaymentStep(true);
  };

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    setAddresses(address.address);
  }, [address.address]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getAddress()).then(setAddressStep(true));
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);

  console.log(addresses);

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

  const clientLogin = () => {
    let user;
    if (email && password) {
      user = { email, password };
      dispatch(signin(user));
    } else {
      alert("Please type your email & password");
    }
  };

  const placeOrder = () => {
    alert("place order");
  };

  return (
    <Layout>
      <Container maxWidth="xl">
        <Box ml={13} mr={13} mt={10} mb={10}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper elevation={3}>
                    <Box sx={{ backgroundColor: "#f1f3f6" }}>
                      <Box p={2}>
                        <Box
                          sx={{
                            display: "flex",
                            color: "black",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            sx={{ border: "1px solid black" }}
                            pl={1}
                            pr={1}
                          >
                            1
                          </Typography>
                          <Typography pl={2}>LOGIN OR SIGNUP</Typography>
                          <Box sx={{ display: "flex", marginLeft: "auto" }}>
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{
                                boxShadow: "none",
                                border: "1px solid",
                                color: "#a9812d",
                                fontSize: "12px",
                                fontWeight: "600",

                                "&:hover": {
                                  border: "1px solid",
                                  boxShadow: "none",
                                },
                                "&:active": {
                                  boxShadow: "none",
                                  border: "1px solid",
                                  backgroundColor: "#ffffff",
                                },
                              }}
                            >
                              Change
                            </Button>
                          </Box>
                        </Box>
                        {auth.authenticate ? (
                          <Box
                            sx={{
                              display: "flex",
                              color: "black",
                              textAlign: "center",
                            }}
                          >
                            <Typography
                              ml={6}
                              pr={1}
                              sx={{ fontSize: "14px", fontWeight: 600 }}
                            >
                              Mrinmoy Mondal
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>
                              mm455575@gmail.com
                            </Typography>
                          </Box>
                        ) : (
                          <Box ml={6} mt={2}>
                            <Grid container spacing={2}>
                              <Box pl={2} pr={2}>
                                <Grid item xs={8}>
                                  <TextField
                                    fullWidth
                                    id="standard-basic"
                                    label="Email Address"
                                    variant="standard"
                                    color="secondary"
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                  <TextField
                                    fullWidth
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="standard"
                                    color="secondary"
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                  />

                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                    pt={2}
                                  >
                                    <StyledContinueButton onClick={clientLogin}>
                                      Continue
                                    </StyledContinueButton>
                                  </Box>
                                </Grid>
                              </Box>

                              <Grid item xs={4}>
                                <Box>
                                  <Typography
                                    sx={{
                                      color: "##000000c9",
                                      fontSize: 16,
                                      fontWeight: 100,
                                    }}
                                    mb={2}
                                  >
                                    Advantages of secure login
                                  </Typography>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      textAllign: "center",
                                      color: "#a9812d",
                                    }}
                                  >
                                    <LocalShippingIcon />
                                    <Typography
                                      sx={{
                                        color: "#a9812d",
                                        fontSize: 14,
                                        fontWeight: 100,
                                      }}
                                      pb={1}
                                      ml={1}
                                    >
                                      Easily track orders.
                                    </Typography>
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      textAllign: "center",
                                      color: "#a9812d",
                                    }}
                                  >
                                    <CampaignIcon />
                                    <Typography
                                      sx={{
                                        color: "#a9812d",
                                        fontSize: 14,
                                        fontWeight: 100,
                                      }}
                                      pb={1}
                                      ml={1}
                                    >
                                      Explore State Feed.
                                    </Typography>
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      textAllign: "center",
                                      color: "#a9812d",
                                    }}
                                  >
                                    <StarIcon />
                                    <Typography
                                      sx={{
                                        color: "#a9812d",
                                        fontSize: 14,
                                        fontWeight: 100,
                                      }}
                                      pb={1}
                                      ml={1}
                                    >
                                      Reviews, Ratings and more.
                                    </Typography>
                                  </Box>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper elevation={3}>
                    <Box sx={{ backgroundColor: "#f1f3f6" }}>
                      <Box p={2}>
                        <Box
                          sx={{
                            display: "flex",
                            color: "black",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            sx={{ border: "1px solid black" }}
                            pl={1}
                            pr={1}
                          >
                            2
                          </Typography>
                          <Typography pl={2}>DELIVERY ADDRESS</Typography>
                          {addressStep && (
                            <Box sx={{ marginLeft: "auto" }}>
                              <Button
                                variant="outlined"
                                size="small"
                                sx={{
                                  boxShadow: "none",
                                  border: "1px solid",
                                  color: "#a9812d",
                                  fontSize: "12px",
                                  fontWeight: "600",

                                  "&:hover": {
                                    border: "1px solid",
                                    boxShadow: "none",
                                  },
                                  "&:active": {
                                    boxShadow: "none",
                                    border: "1px solid",
                                    backgroundColor: "#ffffff",
                                  },
                                }}
                                onClick={() => setOpen(true)}
                                onClose={() => setOpen(false)}
                              >
                                Add
                              </Button>
                              <AddressModal
                                open={open}
                                close={() => setOpen(false)}
                              />
                            </Box>
                          )}
                          {addressSummary && !addressStep && (
                            <Box sx={{ marginLeft: "auto", cursor: "pointer" }}>
                              <Typography
                                pt={1}
                                pl={1}
                                sx={{
                                  fontSize: "12px",
                                  color: "#a9812d",
                                  fontWeight: 600,
                                }}
                                onClick={backToAddress}
                              >
                                Order will deliver to {addressSummary.name},{" "}
                                {addressSummary.mobileNumber}
                              </Typography>
                            </Box>
                          )}
                        </Box>
                        {addressStep && (
                          <Box sx={{ cursor: "pointer" }}>
                            {addresses.address ? (
                              <Address
                                address={addresses.address}
                                setOrderStep={setOrderStep}
                                setAddressSummary={setAddressSummary}
                                setAddressStep={setAddressStep}
                              />
                            ) : (
                              <></>
                            )}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper elevation={3}>
                    <Box sx={{ backgroundColor: "#f1f3f6" }}>
                      <Box p={2}>
                        <Box
                          sx={{
                            display: "flex",
                            color: "black",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            sx={{ border: "1px solid black" }}
                            pl={1}
                            pr={1}
                          >
                            3
                          </Typography>
                          <Typography pl={2}>Order Summary</Typography>

                          {!orderStep && orderSummary && (
                            <Box sx={{ marginLeft: "auto", cursor: "pointer" }}>
                              <Typography
                                pt={1}
                                pl={1}
                                sx={{
                                  fontSize: "12px",
                                  color: "#a9812d",
                                  fontWeight: 600,
                                }}
                                onClick={backToOrder}
                              >
                                {orderSummary} item
                              </Typography>
                            </Box>
                          )}
                        </Box>
                        {orderStep && (
                          <Box>
                            <Box>
                              {Object.keys(cartItems).map((key, index) => (
                                <CardProduct
                                  key={index}
                                  cartItem={cartItems[key]}
                                  onQuantityInc={onQuantityIncrement}
                                  onQuantityDec={onQuantityDecrement}
                                  onRemoveCartItem={onRemoveCartItem}
                                />
                              ))}
                            </Box>
                            <Box sx={{ display: "flex" }}>
                              <Box sx={{ marginLeft: "auto" }} p={2}>
                                <StyledContinueButton onClick={confirmOrder}>
                                  Continue
                                </StyledContinueButton>
                              </Box>
                            </Box>
                          </Box>
                        )}
                        <Box></Box>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper elevation={3}>
                    <Box sx={{ backgroundColor: "#f1f3f6" }}>
                      <Box sx={{ display: "flex", color: "black" }} p={2}>
                        <Typography
                          sx={{ border: "1px solid black" }}
                          pl={1}
                          pr={1}
                        >
                          4
                        </Typography>
                        <Typography pl={2}>PAYMENT OPTIONS</Typography>
                      </Box>
                      {paymentStep && !addressStep && !orderStep && (
                        <Box>
                          <Box>COD</Box>
                          <Divider />
                          <Box sx={{ display: "flex" }}>
                            <Box sx={{ marginLeft: "auto" }} p={2}>
                              <StyledContinueButton onClick={placeOrder}>
                                PLACE ORDER
                              </StyledContinueButton>
                            </Box>
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
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

// {!orderStep && orderSummary && (
//   <Box sx={{ marginLeft: "auto", cursor: "pointer" }}>
//   <Typography
//     pt={1}
//     pl={1}
//     sx={{
//       fontSize: "12px",
//       color: "#a9812d",
//       fontWeight: 600,
//     }}
//     //onClick={backToAddress}
//   >
//     {orderSummary} item
//   </Typography>
// </Box>
// )}
