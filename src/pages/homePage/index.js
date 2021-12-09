import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Carousel } from "../../components/Carousel";
import { NavbarHome } from "../../components/Navbar-Home";

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
  return (
    <>
      <NavbarHome />
      <Box className={styles.carousel}>
        <Carousel />
      </Box>
    </>
  );
};
