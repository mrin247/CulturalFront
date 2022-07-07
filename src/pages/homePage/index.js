import { Box } from "@mui/material";
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
import { Navigate, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.products);

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(allProducts);

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
      <NavbarHome />
      <Box className={styles.carousel}>
        <Carousel />
        <ProductSlide
          title="Top Products"
          filter="top"
          products={allProducts.slice(0, 5)}
          //viewAll={() => viewAllTopProducts()}
        />

        {/* <StoreSlide
          title="Top Stores"
          //viewAll={viewAllTopStores}
        /> */}
        {navData.map((category) => {
          const filterByCategory = (p) => {
            console.log(p);
            return p.category === category.text;
          };
          const products = allProducts.filter(filterByCategory);
          return (
            <ProductSlide
              title={`Top ${category.text} Products`}
              filter={category.route}
              products={products.slice(0, 5)}
              viewAll={() => viewAllTopProducts(category.route)}
            />
          );
        })}
      </Box>
    </Layout>
  );
};
