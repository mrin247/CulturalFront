import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Layout } from "../../components/Layout";
import { SideSummary } from "../../components/SideSummary";

/**
 * @author
 * @function CheckoutPage
 **/

export const CheckoutPage = (props) => {
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
                            <Button variant="outlined" size="small">
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
                          2
                        </Typography>
                        <Typography pl={2}>DELIVERY ADDRESS</Typography>
                        <Box sx={{ marginLeft: "auto" }}>
                          <Button variant="outlined" size="small">
                            Change
                          </Button>
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
