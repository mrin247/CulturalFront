import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../actions/productActions";
import { Layout } from "../../components/Layout";
import { NavbarProduct } from "../../components/Navbar-Product";
import { ProductCard } from "../../components/Product-Card";
import { SideFilter } from "../../components/Side-Filter";
import { SideSummary } from "../../components/SideSummary";

/**
 * @author
 * @function PujaPage
 **/

export const PujaPage = (props) => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.products);

  React.useEffect(() => {
    dispatch(getProductsByCategory("Puja Samagrhi"));
  }, []);

  let products = allProducts;
  const [desc, setDesc] = useState(false);

  if (desc) {
    products = [...products].reverse();
  }

  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(10000000);

  products = products.filter((p) => {
    return p.price > low && p.price < high;
  });

  const toggleSort = () => {
    setDesc(!desc);
  };

  const setLimit = (l, h) => {
    setLow(l);
    setHigh(h);
  };
  return (
    <Layout>
      <NavbarProduct />

      <Box ml={1} mr={1} mt={2}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <SideFilter
              desc={desc}
              toggle={toggleSort}
              setLimit={(l, h) => setLimit(l, h)}
            />
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
