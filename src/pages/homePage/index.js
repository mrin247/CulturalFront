import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Carousel } from "../../components/Carousel";
import { Layout } from "../../components/Layout";
import { NavbarHome } from "../../components/Navbar-Home";
import { ProductSlide } from "../../components/Slide";

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

export const HomePage = (props) => {
  const styles = useStyle();
  const viewAllTopProducts = () => {
    alert("viewAllTopProducts");
  };
  return (
    <Layout>
      <Box className={styles.carousel}>
        <Carousel />
        <ProductSlide title="Top Products" viewAll={viewAllTopProducts} />
      </Box>
    </Layout>
  );
};
