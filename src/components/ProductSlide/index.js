/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
//import { products } from "../../Data/data";

/**
 * @author
 * @function ProductSlide
 **/
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
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

const useStyle = makeStyles({
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
});

export const ProductSlide = (props) => {
  const navigate = useNavigate();
  const products = props.products;
  if (products) {
    console.log("here are products", products);
  }

  const classes = useStyle();
  return (
    <Box sx={{ marginTop: 1, background: "#FFFFFF" }}>
      <Box
        sx={{
          display: "flex",
          padding: "15px 20px",
        }}
      >
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 600,
            lineHeight: "32px",
            marginRight: 25,
            color: "rgb(168 135 67)",
          }}
        >
          {props.title}
        </Typography>
        <ColorButton variant="contained" onClick={props.viewAll}>
          View All
        </ColorButton>
      </Box>
      <Divider />
      <Carousel
        centerMode={true}
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Box
            textAlign="center"
            style={{ padding: "25px 15px", cursor: "pointer" }}
            onClick={() => navigate(`/p/${product._id}`)}
          >
            <img
              src={
                product[productPhotos].length > 0
                  ? product.productPhotos[0]
                  : "https://jubilantconsumer.com/wp-content/themes/jubilant/assets/img/product.png"
              }
              className={classes.image}
            />
            <Typography className={classes.text} style={{ fontWeight: 600 }}>
              {product.name}
            </Typography>
            <Typography className={classes.text} style={{ color: "green" }}>
              {product.price}
            </Typography>
            <Typography
              className={classes.text}
              style={{ color: "#212121", opacity: ".6" }}
            >
              {product.category}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
