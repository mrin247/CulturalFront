/* eslint-disable jsx-a11y/alt-text */

import { Box, Button, Divider, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import React from "react";
import CarouselBar from "react-material-ui-carousel";
import { bannerData } from "../../Data/data";

/**
 * @author
 * @function StoreLists
 **/
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
  bannerImage: {
    width: "100%",
    height: 450,
  },
  carousel: {
    marginTop: 5,
    color: "white",
  },
});

export const StoreLists = (props) => {
  const styles = useStyle();
  return (
    <Box sx={{ marginBottom: 1, background: "#FFFFFF" }}>
      <Divider />
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
          Top Stores
        </Typography>
        <ColorButton variant="contained" onClick={props.viewAll}>
          View All
        </ColorButton>
      </Box>
      <Divider />
      <CarouselBar
        className={styles.carousel}
        autoPlay={true}
        animation="slide"
        swipe={true}
        indicators={false}
        cycleNavigation={true}
        duration={1000}
      >
        {bannerData.map((image) => (
          <Box
            sx={{
              backgroundImage: `url(${image})`,

              textAlign: "center",
              display: "inline-block",
              cursor: "pointer",
            }}
            className={styles.bannerImage}
            onClick={() => alert(image)}
          >
            <Box
              sx={{ border: "3px solid black", display: "block" }}
              ml={50}
              mr={50}
              mt={20}
              p={1}
            >
              <Box
                sx={{
                  border: "2px solid black",
                  backgroundColor: "rgb(0 0 0 / 77%)",
                }}
                p={1}
              >
                <Typography>Store Name</Typography>
                <Typography>Total Products</Typography>
                <Typography>Other Categories</Typography>
                <Typography>Address</Typography>
                <Typography>Store Contact</Typography>
              </Box>
            </Box>
          </Box>
          // <img src={image} className={styles.bannerImage} />
        ))}
      </CarouselBar>
    </Box>
  );
};
