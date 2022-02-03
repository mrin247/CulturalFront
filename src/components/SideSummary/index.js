import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import { Box, Paper } from "@mui/material";

/**
 * @author
 * @function SideSummary
 **/

export const SideSummary = (props) => {
  return (
    <Box position={"fixed"} sx={{ width: "50vh" }}>
      <Paper elevation={3}>
        <Box>
          <Typography
            p={2}
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: "#878787",
              textTransform: "uppercase",
            }}
          >
            Price Details
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ height: "100%" }}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={1}
            mb={2}
          >
            <Typography>Price (2 items)</Typography>
            <Typography>45478</Typography>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={1}
            mb={2}
          >
            <Typography>Discount</Typography>
            <Typography>-4540</Typography>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={1}
            mb={5}
          >
            <Typography>Delivery Charges</Typography>
            <Typography color={"green"}>Free</Typography>
          </Box>
          <Divider />
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={3}
            mb={3}
          >
            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
              Total Amount
            </Typography>
            <Box sx={{ display: "flex" }}>
              <CurrencyRupeeRoundedIcon
                sx={{ fontSize: 25, fontWeight: 600 }}
              />
              <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                4540
              </Typography>
            </Box>
          </Box>
          <Divider />

          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={1}
            mb={1}
          >
            <Typography sx={{ fontSize: 16, color: "green" }}>
              You will save ₹6,075 on this order
            </Typography>
          </Box>
          <Divider />
        </Box>
      </Paper>
    </Box>
  );
};
