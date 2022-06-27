/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { navData } from "../../Data/data";
import { makeStyles } from "@mui/styles";
import { Navigate, useNavigate } from "react-router-dom";

/**
 * @author
 * @function Navbar
 **/

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    //margin: "65px 0px 0 0px",
    overflowX: "overlay",
    cursor: "pointer",
    backgroundColor: "#F2F3F4",
    padding: "25px 130px 15px 130px",
  },
  textBox: {
    color: "black",
    fontSize: 18,
    fontWeight: 900,
    fontFamily: "inherit",
    display: "flex",
    //justifyContent: "space-between",
  },
}));

export const MedNav = (props) => {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <Box className={styles.container}>
      <Box className={styles.textBox}>
        <Box pr={5} type="button" onClick={()=>navigate("/")}>
          <Typography>StateFront</Typography>
        </Box>
        <Box pr={5}>
          <Typography>Location Box</Typography>
        </Box>
      </Box>
      <Box className={styles.textBox}>
        <Typography pr={3}>Medicines</Typography>
        <Typography pr={3}>Services</Typography>
        <Typography pr={3}>Book Appointment</Typography>
        <Typography pr={3}>Contacts</Typography>
      </Box>
    </Box>
  );
};
