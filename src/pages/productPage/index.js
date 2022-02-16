import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import { NavbarProduct } from "../../components/Navbar-Product";
import { SideFilter } from "../../components/Side-Filter";
import { SideProduct } from "../../components/Side-Product";
import StarRateIcon from "@mui/icons-material/StarRate";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { FixedSizeList } from "react-window";
import { ProductSlide } from "../../components/ProductSlide";
import { StoreSlide } from "../../components/StoreSlide";
import { StoreLists } from "../../components/StoreLists";
import { styled } from "@mui/styles";
import Carousel from "react-multi-carousel";
import { products } from "../../Data/data";
import { ProductCard } from "../../components/Product-Card";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetail } from "../../actions/productActions";

/**
 * @author
 * @function product
 **/
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgb(169 129 45)",
  "&:hover": {
    backgroundColor: "rgb(168 135 67)",
  },
  marginLeft: "auto",
  borderRadius: 20,
  fontSize: "14px",
  textTransform: "none",
}));

export const Product = (props) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.product);
  const { productId } = useParams();

  React.useEffect(() => {
    dispatch(productDetail(productId));
  }, []);
  console.log(product);

  return (
    <Layout>
      <NavbarProduct />
      {product !== null ? (
        <Container maxWidth="xl">
          <Box
            ml={10}
            mr={10}
            mt={2}
            sx={{ display: "flex", allignItems: "center" }}
          >
            <SideProduct product={product}/>

            <Box sx={{ marginLeft: "81vh" }}>
              {/* Product detail */}
              <Paper elevation={3}>
                <Box ml={3} pt={1} pb={1}>
                  <Typography sx={{ fontSize: "30px", fontWeight: 500 }}>
                    {product.name}
                  </Typography>
                  <Box sx={{ display: "flex" }} pt={1}>
                    <Typography
                      sx={{
                        lineHeight: "normal",
                        display: "inline-block",
                        color: " #fff",
                        padding: "2px 4px 2px 6px",
                        borderRadius: "3px",
                        fontWeight: 500,
                        fontSize: "14px",
                        verticalAlign: "middle",
                        backgroundColor: "#388e3c",
                      }}
                    >
                      4.4
                      <StarRateIcon fontSize="inherit" />
                    </Typography>
                    <Typography pl={1} sx={{ color: "#878787" }}>
                      156 ratings & 45 reviews
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      textAlign: "center",
                    }}
                    pt={1}
                  >
                    <Typography sx={{ fontSize: "30px" }}>
                      {product.price}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#878787",
                        textDecoration: "line-through",
                      }}
                      pl={1}
                    >
                      ₹2999
                    </Typography>
                    <Typography
                      sx={{ fontSize: "20px", color: "green" }}
                      pl={1}
                    >
                      33% off
                    </Typography>
                  </Box>
                  <Box>
                    <Grid container spacing={3}>
                      <Grid item xs={2}>
                        <Typography sx={{ color: "#878787" }}>
                          Description
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography>{product.description}</Typography>
                      </Grid>

                      <Grid item xs={2}>
                        <Typography sx={{ color: "#878787" }}>
                          Highlights
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography sx={{ color: "#878787" }}>
                          Seller
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Box sx={{ display: "flex" }} pb={1}>
                          <Typography sx={{ color: "blue" }} pr={1}>
                            {product.createdBy}
                          </Typography>
                          <Typography
                            sx={{
                              lineHeight: "normal",
                              display: "inline-block",
                              color: " #fff",
                              padding: "2px 4px 2px 6px",
                              borderRadius: "3px",
                              fontWeight: 500,
                              fontSize: "14px",
                              verticalAlign: "middle",
                              backgroundColor: "#388e3c",
                            }}
                          >
                            4.4
                            <StarRateIcon fontSize="inherit" />
                          </Typography>
                        </Box>

                        <Typography>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid black",
                    }}
                    mb={2}
                    mr={3}
                    mt={2}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        allignItems: "center",
                      }}
                    >
                      <Typography p={1}>Ratings & Reviews</Typography>
                      <Box sx={{ marginLeft: "auto" }} p={1}>
                        <Button size="small">Rate</Button>
                      </Box>
                    </Box>
                    <Divider />
                    <List sx={{ maxHeight: 300, overflow: "auto" }}>
                      <ListItem>
                        <Box p={1}>
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              mr={2}
                              sx={{ fontSize: "14px", fontWeight: 600 }}
                            >
                              Customer Name
                            </Typography>

                            <Typography
                              sx={{
                                lineHeight: "normal",
                                display: "inline-block",
                                color: " #fff",
                                padding: "2px 4px 2px 6px",
                                borderRadius: "3px",
                                fontWeight: 500,
                                fontSize: "14px",
                                verticalAlign: "middle",
                                backgroundColor: "#388e3c",
                              }}
                            >
                              4.4
                              <StarRateIcon fontSize="inherit" />
                            </Typography>
                          </Box>
                          <Typography>
                            dustry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make{" "}
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem>
                        <Box p={1}>
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              mr={2}
                              sx={{ fontSize: "14px", fontWeight: 600 }}
                            >
                              Customer Name
                            </Typography>

                            <Typography
                              sx={{
                                lineHeight: "normal",
                                display: "inline-block",
                                color: " #fff",
                                padding: "2px 4px 2px 6px",
                                borderRadius: "3px",
                                fontWeight: 500,
                                fontSize: "14px",
                                verticalAlign: "middle",
                                backgroundColor: "#388e3c",
                              }}
                            >
                              4.4
                              <StarRateIcon fontSize="inherit" />
                            </Typography>
                          </Box>
                          <Typography>
                            dustry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make{" "}
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem>
                        <Box p={1}>
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              mr={2}
                              sx={{ fontSize: "14px", fontWeight: 600 }}
                            >
                              Customer Name
                            </Typography>

                            <Typography
                              sx={{
                                lineHeight: "normal",
                                display: "inline-block",
                                color: " #fff",
                                padding: "2px 4px 2px 6px",
                                borderRadius: "3px",
                                fontWeight: 500,
                                fontSize: "14px",
                                verticalAlign: "middle",
                                backgroundColor: "#388e3c",
                              }}
                            >
                              4.4
                              <StarRateIcon fontSize="inherit" />
                            </Typography>
                          </Box>
                          <Typography>
                            dustry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make{" "}
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem>
                        <Box p={1}>
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              mr={2}
                              sx={{ fontSize: "14px", fontWeight: 600 }}
                            >
                              Customer Name
                            </Typography>

                            <Typography
                              sx={{
                                lineHeight: "normal",
                                display: "inline-block",
                                color: " #fff",
                                padding: "2px 4px 2px 6px",
                                borderRadius: "3px",
                                fontWeight: 500,
                                fontSize: "14px",
                                verticalAlign: "middle",
                                backgroundColor: "#388e3c",
                              }}
                            >
                              4.4
                              <StarRateIcon fontSize="inherit" />
                            </Typography>
                          </Box>
                          <Typography>
                            dustry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make{" "}
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem>
                        <Box p={1}>
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              mr={2}
                              sx={{ fontSize: "14px", fontWeight: 600 }}
                            >
                              Customer Name
                            </Typography>

                            <Typography
                              sx={{
                                lineHeight: "normal",
                                display: "inline-block",
                                color: " #fff",
                                padding: "2px 4px 2px 6px",
                                borderRadius: "3px",
                                fontWeight: 500,
                                fontSize: "14px",
                                verticalAlign: "middle",
                                backgroundColor: "#388e3c",
                              }}
                            >
                              4.4
                              <StarRateIcon fontSize="inherit" />
                            </Typography>
                          </Box>
                          <Typography>
                            dustry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make{" "}
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem>
                        <Box p={1}>
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              mr={2}
                              sx={{ fontSize: "14px", fontWeight: 600 }}
                            >
                              Customer Name
                            </Typography>

                            <Typography
                              sx={{
                                lineHeight: "normal",
                                display: "inline-block",
                                color: " #fff",
                                padding: "2px 4px 2px 6px",
                                borderRadius: "3px",
                                fontWeight: 500,
                                fontSize: "14px",
                                verticalAlign: "middle",
                                backgroundColor: "#388e3c",
                              }}
                            >
                              4.4
                              <StarRateIcon fontSize="inherit" />
                            </Typography>
                          </Box>
                          <Typography>
                            dustry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make{" "}
                          </Typography>
                        </Box>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      ) : (
        <></>
      )}
    </Layout>
  );
};
