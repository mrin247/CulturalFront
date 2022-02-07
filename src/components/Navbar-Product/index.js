/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { navData } from "../../Data/data";
import { makeStyles } from "@mui/styles";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

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
    padding: "65px 130px 0 130px",
    overflowX: "overlay",
    cursor: "pointer",
    backgroundColor: "#c9cacc",
  },
  textContainer: {
    padding: "10px 8px",
    textAlign: "center",
  },
  text: {
    color: "#a9812d",
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "inherit",
  },
  pageTextContainer: {
    padding: "10px 8px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
}));

export const NavbarProduct = (props) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box className={styles.container}>
      {navData.map((data) => (
        <Box
          className={
            location.pathname === `/${data.route}`
              ? styles.pageTextContainer
              : styles.textContainer
          }
          onClick={() => navigate(`/${data.route}`)}
        >
          <Typography className={styles.text}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};
