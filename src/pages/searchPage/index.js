import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Carousel } from "../../components/Carousel";
import { Layout } from "../../components/Layout";
import { NavbarHome } from "../../components/Navbar-Home";
import { ProductSlide } from "../../components/ProductSlide";
import { StoreSlide } from "../../components/StoreSlide";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/productActions";
import { navData } from "../../Data/data";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { ProductCard } from "../../components/Product-Card";
import { NavbarProduct } from "../../components/Navbar-Product";

/**
 * @author
 * @function HomePage
 **/
const useStyle = makeStyles({
  carousel: {
    padding: 10,
    backgroundColor: "#D6DBDF",
  },
});

export const SearchPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.products);
  const [searchParams] = useSearchParams();
  const key = searchParams.get("keyword");

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(allProducts);

  const products = allProducts.filter((product) => {
    if (
      product.name.toLowerCase().includes(key.toLowerCase()) ||
      product.category.toLowerCase().includes(key.toLowerCase()) ||
      product.description.toLowerCase().includes(key.toLowerCase())
    ) {
      return product;
    }
  });

  console.log(products);

  const styles = useStyle();
  const viewAllTopProducts = (route) => {
    navigate(`/${route}`);
  };
  const viewAllTopStores = () => {
    alert("viewAllTopStores");
  };
  //console.log(auth);
  return (
    <Layout>
      <NavbarProduct />
      <Box ml={1} mr={1} mt={2}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
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
