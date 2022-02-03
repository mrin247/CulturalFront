import { Box, Button, Container, Grid, Paper } from "@mui/material";
import React from "react";
import { CardProduct } from "../../components/CartProduct";
import { Layout } from "../../components/Layout";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import { SideSummary } from "../../components/SideSummary";

/**
 * @author
 * @function CartPage
 **/

export const CartPage = (props) => {
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
                  <CardProduct />
                  <CardProduct />

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
                    >
                      Place order
                    </Button>
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
