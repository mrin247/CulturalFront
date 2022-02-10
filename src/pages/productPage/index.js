import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import { Layout } from "../../components/Layout";
import { NavbarProduct } from "../../components/Navbar-Product";
import { SideFilter } from "../../components/Side-Filter";
import { SideProduct } from "../../components/Side-Product";

/**
 * @author
 * @function product
 **/

export const Product = (props) => {
  return (
    <Layout>
      <NavbarProduct />
      <Container maxWidth="xl">
        <Box ml={10} mr={10} mt={2}>
          <SideProduct />

          <Box sx={{ marginLeft: "91vh" }}>
              {/* Product detail */}
              Hello</Box>
        </Box>
      </Container>
    </Layout>
  );
};
