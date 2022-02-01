/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { navData } from "../../Data/data";
import { makeStyles } from "@mui/styles";

/**
 * @author
 * @function Navbar
 **/

const useStyles = makeStyles((theme) => ({
  image: {
    width: 64,
    height: 64,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "65px 130px 0 130px",
    overflowX: "overlay",
    cursor: "pointer",
  },
  imageContainer: {
    padding: "12px 8px",
    textAlign: "center",
  },
  text: {
    color: "#a9812d",
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "inherit",
  },
}));

export const NavbarHome = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      {navData.map((data) => (
        <Box className={styles.imageContainer} onClick={() => alert(data.text)}>
          <img src={data.url} className={styles.image} />
          <Typography className={styles.text}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};
