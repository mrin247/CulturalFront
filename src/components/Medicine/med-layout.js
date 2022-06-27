import { Box } from "@mui/material";
import React from "react";
import { Header } from "../Header";
import { NavbarHome } from "../Navbar-Home";
import { MedNav } from "./med-nav";

/**
 * @author
 * @function Layout
 **/

export const MedLayout = (props) => {
  return (
    // <>
    //   <Header />
    //   <NavbarHome />
    // </>

    <>
      <Box>
        <MedNav />
        {props.children}
      </Box>
    </>
  );
};
