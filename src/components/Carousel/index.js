/* eslint-disable jsx-a11y/alt-text */

import { makeStyles } from "@mui/styles";
import React from "react";
import CarouselBar from "react-material-ui-carousel";
import { bannerData } from "../../Data/data";

/**
 * @author
 * @function Carousel
 **/

const useStyle = makeStyles({
  bannerImage: {
    width: "100%",
    height: 450,
  },
  carousel: {
    marginTop: 5,
  },
});

export const Carousel = (props) => {
  const styles = useStyle();
  return (
    <CarouselBar
      className={styles.carousel}
      autoPlay={true}
      animation="slide"
      swipe={true}
      indicators={false}
      cycleNavigation={true}
      duration={600}
    >
      {bannerData.map((image) => (
        <img src={image} className={styles.bannerImage} />
      ))}
    </CarouselBar>
  );
};
