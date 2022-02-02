import { Box } from "@mui/material";
import React from "react";
import { Header } from "../Header";
import { NavbarHome } from "../Navbar-Home";

/**
 * @author
 * @function Layout
 **/

export const Layout = (props) => {
  return (
    // <>
    //   <Header />
    //   <NavbarHome />
    // </>

    <>
      <Box>
        <Header />
        {props.children}
      </Box>
    </>
  );
};
