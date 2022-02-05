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
import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { SideSummary } from "../../components/SideSummary";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CampaignIcon from "@mui/icons-material/Campaign";
import StarIcon from "@mui/icons-material/Star";
import { Address } from "../../components/Address";
import { AddressModal } from "../../components/AddressModal";
import { CardProduct } from "../../components/CartProduct";
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
                                />
                                <TextField
                                  fullWidth
                                  id="standard-password-input"
                                  label="Password"
                                  type="password"
                                  autoComplete="current-password"
                                  variant="standard"
                                  color="secondary"
                                />
                                <Typography
                                  sx={{
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: "#a9812d",
                                    cursor: "pointer",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                  mt={2}
                                >
                                  Logout & Signin with another account
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                  pt={2}
                                >
                                  <StyledContinueButton>
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
                        </Box>
                        <Box sx={{ cursor: "pointer" }}>
                          <Address />
                          <Divider />
                          <Address />
                        </Box>
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
                          3
                        </Typography>
                        <Typography pl={2}>ORDER DETAILS</Typography>
                      </Box>
                      <CardProduct/>
                      <CardProduct/>
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

{
  /* <Box p={2} sx={{ textAlign: "center", display: "flex" }}>
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
                  </Box> */
}
