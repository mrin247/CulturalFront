import { Box, Button, Checkbox, Divider, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

/**
 * @author
 * @function Address
 **/
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Address = (props) => {
  return (
    <Box sx={{ display: "flex", cursor: "pointer" }} ml={6}>
      <Box>
        <Checkbox {...label} />
      </Box>
      <Box>
        <Box sx={{ display: "flex", textAlign: "center" }}>
          <Typography pt={1} pl={1} sx={{ fontSize: "14px", fontWeight: 600 }}>
            Mrinmoy Mondal
          </Typography>
          <Box pt={1} pl={1} pr={1}>
            <HomeIcon />
          </Box>

          <Typography pt={1} sx={{ fontSize: "14px" }}>
            8116360121
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }} pl={1} pb={1}>
          <Typography sx={{ fontSize: "14px" }}>Monoharbohal</Typography>
          <Typography sx={{ fontSize: "14px" }}>, Near laxmi mandir</Typography>
          <Typography sx={{ fontSize: "14px" }}>, asansol</Typography>
          <Typography sx={{ fontSize: "14px" }}>, Mondal House</Typography>
          <Typography sx={{ fontSize: "14px" }}>, West Bengal</Typography>
          <Typography sx={{ fontSize: "14px" }}>-713359</Typography>
        </Box>
        <Button
          variant="contained"
          size="medium"
          sx={{
            boxShadow: "none",
            border: "1px solid",
            color: "#ffffff",
            fontSize: "12px",
            marginBottom: 1,
            fontWeight: "600",
            backgroundColor: "#a9812d",
            "&:hover": {
              border: "1px solid",
              boxShadow: "none",
              backgroundColor: "#a9812d",
            },
            "&:active": {
              boxShadow: "none",
              border: "1px solid",
              backgroundColor: "#a9812d",
            },
          }}
        >
          Deliver here
        </Button>
      </Box>
    </Box>
  );
};
