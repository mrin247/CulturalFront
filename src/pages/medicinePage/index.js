import { Box, Container } from "@mui/material";
import React from "react";
import { Carousel } from "../../components/Carousel";
import { Layout } from "../../components/Layout";
import { MedHome } from "../../components/Medicine/med-home";
import { MedLayout } from "../../components/Medicine/med-layout";
import { MedNav } from "../../components/Medicine/med-nav";

/**
 * @author
 * @function MedicinePage
 **/

export const MedicinePage = (props) => {
  return (
    <MedLayout>
      <MedHome/>
    </MedLayout>
  );
};
