import { Box, Button, Container, Grid, Paper } from "@mui/material";
import React from "react";
import { CardProduct } from "../../components/CartProduct";
import { Layout } from "../../components/Layout";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/styles";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";

/**
 * @author
 * @function CartPage
 **/

const StyledButton = styled(Button)(({ theme }) => ({
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
}));

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
                    <StyledButton>Place order</StyledButton>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={3}>
                <Box>
                  <Typography
                    p={2}
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#878787",
                      textTransform: "uppercase",
                    }}
                  >
                    Price Details
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ height: "100%" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                    ml={2}
                    mr={2}
                    mt={1}
                    mb={2}
                  >
                    <Typography>Price (2 items)</Typography>
                    <Typography>45478</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                    ml={2}
                    mr={2}
                    mt={1}
                    mb={2}
                  >
                    <Typography>Discount</Typography>
                    <Typography>-4540</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                    ml={2}
                    mr={2}
                    mt={1}
                    mb={5}
                  >
                    <Typography>Delivery Charges</Typography>
                    <Typography color={"green"}>Free</Typography>
                  </Box>
                  <Divider />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                    ml={2}
                    mr={2}
                    mt={3}
                    mb={3}
                  >
                    <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                      Total Amount
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <CurrencyRupeeRoundedIcon
                        sx={{ fontSize: 25, fontWeight: 600 }}
                      />
                      <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                        4540
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />

                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                    ml={2}
                    mr={2}
                    mt={1}
                    mb={1}
                  >
                    <Typography sx={{ fontSize: 16, color: "green" }}>
                      You will save ₹6,075 on this order
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};
