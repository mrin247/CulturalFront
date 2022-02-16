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
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../actions/productActions";
import { Layout } from "../../components/Layout";
import { NavbarProduct } from "../../components/Navbar-Product";
import { ProductCard } from "../../components/Product-Card";
import { SideFilter } from "../../components/Side-Filter";
import { SideSummary } from "../../components/SideSummary";

/**
 * @author
 * @function BooksPage
 **/

export const BooksPage = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  React.useEffect(() => {
    dispatch(getProductsByCategory("Books & Magazines"));
  }, []);
  return (
    <Layout>
      <NavbarProduct />

      <Box ml={1} mr={1} mt={2}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <SideFilter />
          </Grid>
          <Grid item xs={10} sx={{ marginLeft: "41vh" }}>
            <Box>
              <Grid container spacing={1}>
                {products.map((product) => (
                  <Grid item xs={3}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};
