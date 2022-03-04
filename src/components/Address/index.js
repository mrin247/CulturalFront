import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import BusinessIcon from "@mui/icons-material/Business";
import { AddressModal } from "../AddressModal";

/**
 * @author
 * @function Address
 **/
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Address = (props) => {
  const [open, setOpen] = useState(false);

  const addresses = props.address;
  const setAddressSummary = props.setAddressSummary;
  const setOrderStep = props.setOrderStep;
  const setAddressStep = props.setAddressStep;

  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState();

  const [location, setLocation] = useState(addresses);

  const updateAddress = (addr) => {
    const updatedAddress = location.map((adr) =>
      adr._id === addr._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    setLocation(updatedAddress);
  };

  const confirmAddress = (addr) => {
    setAddressSummary(addr);
    setAddressStep(false);
    setOrderStep(true);
  };

  return (
    <>
      {location.map((address) => (
        <Box sx={{ display: "flex", cursor: "pointer" }} ml={6}>
          <Box
            sx={{
              display: "flex",
              cursor: "pointer",
              justifyContent: "center",
              paddingTop: "8px",
            }}
          >
            <input
              name="address"
              type="radio"
              onClick={() => updateAddress(address)}
            />
          </Box>
          <Box>
            <Box
              sx={{ display: "flex", textAlign: "center", fontSize: "14px" }}
            >
              <Typography
                pt={1}
                pl={1}
                sx={{ fontSize: "14px", fontWeight: 600 }}
              >
                {address.name}
              </Typography>

              <Typography pt={1} pl={1} sx={{ fontSize: "14px" }}>
                {address.mobileNumber}
              </Typography>
              <Box pt={1} pl={1} pr={1}>
                {address.addressType === "Home" ? (
                  <HomeIcon />
                ) : (
                  <BusinessIcon />
                )}
              </Box>
              {address.selected ? (
                <Box pt={1} pl={1} pr={1} sx={{ marginLeft: "auto" }}>
                  <EditIcon
                    fontSize="small"
                    sx={{ color: "black" }}
                    onClick={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                  />
                  <AddressModal open={open} close={() => setOpen(false)} data={address}/>
                </Box>
              ) : (
                <></>
              )}
            </Box>
            <Box sx={{ display: "flex" }} pl={1} pb={1}>
              <Typography sx={{ fontSize: "14px" }}>
                {address.address}
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                , {address.locality}
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                , {address.cityDistrictTown}
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                -{address.pinCode}
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                , {address.state}
              </Typography>
            </Box>
            {address.selected ? (
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
                onClick={() => confirmAddress(address)}
              >
                Deliver here
              </Button>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      ))}
    </>
  );
};
