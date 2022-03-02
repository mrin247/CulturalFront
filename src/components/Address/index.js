import { Box, Button, Checkbox, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import BusinessIcon from "@mui/icons-material/Business";

/**
 * @author
 * @function Address
 **/
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Address = (props) => {
  const [checked, setChecked] = useState(false);
  const address = props.address;
  return (
    <Box sx={{ display: "flex", cursor: "pointer" }} ml={6}>
      <Box>
        <Checkbox {...label} color="secondary" checked={checked} />
      </Box>
      <Box>
        <Box sx={{ display: "flex", textAlign: "center", fontSize: "14px" }}>
          <Typography pt={1} pl={1} sx={{ fontSize: "14px", fontWeight: 600 }}>
            {address.name}
          </Typography>

          <Typography pt={1} pl={1} sx={{ fontSize: "14px" }}>
            {address.mobileNumber}
          </Typography>
          <Box pt={1} pl={1} pr={1}>
            {address.addressType === "Home" ? <HomeIcon /> : <BusinessIcon />}
          </Box>
          <Box pt={1} pl={1} pr={1} sx={{ marginLeft: "auto" }}>
            <EditIcon fontSize="inherit" />
          </Box>
        </Box>
        <Box sx={{ display: "flex" }} pl={1} pb={1}>
          <Typography sx={{ fontSize: "14px" }}>{address.address}</Typography>
          <Typography sx={{ fontSize: "14px" }}>
            , {address.locality}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            , {address.cityDistrictTown}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>-{address.pinCode}</Typography>
          <Typography sx={{ fontSize: "14px" }}>, {address.state}</Typography>
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
