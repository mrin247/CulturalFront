import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../actions/orderActions";
import { CardProduct } from "../../components/CartProduct";
import { Layout } from "../../components/Layout";
import { OrderItem } from "../../components/OrderItem";

/**
 * @author
 * @function BlogsPage
 **/

export const OrdersPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  React.useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log(orders);

  return (
    <Layout>
      <Box>
        <Container maxWidth="xl">
          <Box ml={13} mr={13} mt={10} mb={10}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={3}>
                  <Box sx={{ bgcolor: "white" }}>
                    <Box>
                      <Typography p={2} sx={{ fontSize: 16, fontWeight: 600 }}>
                        My Orders
                      </Typography>
                    </Box>
                    <Divider />
                    {orders.map((order) => (
                      <OrderItem order={order} />
                    ))}
                    {/* {{Object.keys(orderItems).map((key, index) => (
                      <CardProduct
                        key={index}
                        cartItem={Orders[key]}
                        onQuantityInc={onQuantityIncrement}
                        onQuantityDec={onQuantityDecrement}
                        onRemoveCartItem={onRemoveCartItem}
                      />
                    ))} */}

                    {/*cartLength > 0 ? (
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
                    )} */}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};
