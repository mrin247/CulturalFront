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
  import { NavbarProduct } from "../../components/Navbar-Product";
  import { ProductCard } from "../../components/Product-Card";
  import { SideFilter } from "../../components/Side-Filter";
  import { SideSummary } from "../../components/SideSummary";
  
  /**
   * @author
   * @function GroceryPage
   **/
  
  export const GroceryPage = (props) => {
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
                  <Grid item xs={3}>
                    <ProductCard />
                  </Grid>
                  <Grid item xs={3}>
                    <ProductCard />
                  </Grid>
                  <Grid item xs={3}>
                    <ProductCard />
                  </Grid>
                  <Grid item xs={3}>
                    <ProductCard />
                  </Grid>
                  <Grid item xs={3}>
                    <ProductCard />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    );
  };
  