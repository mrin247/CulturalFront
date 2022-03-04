import {
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createAddress } from "../../actions/addressActions";

/**
 * @author
 * @function AddressModal
 **/

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const types = [
  {
    value: "Home",
    label: "Home (All Day Delivery)",
  },
  {
    value: "Business",
    label: "Business (Deliver between 10 AM - 9 PM",
  },
];

export const AddressModal = (props) => {
  const data = props.data ? props.data : null;
  console.log(data);
  const [name, setName] = useState(data ? data.name : "");
  const [mobileNumber, setMobileNumber] = useState(
    data ? data.mobileNumber : ""
  );
  const [pin, setPin] = useState(data ? data.pinCode : "");
  const [locality, setLocality] = useState(data ? data.locality : "");
  const [area, setArea] = useState(data ? data.address : "");
  const [city, setCity] = useState(data ? data.cityDistrictTown : "");
  const [type, setType] = React.useState(data ? data.addressType : "Home");

  const state = "West Bengal";
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const addAddress = () => {
    if (name && mobileNumber && pin && locality && area && city && type) {
      const payload = {
        address: {
          name,
          mobileNumber,
          pinCode: pin,
          locality,
          address: area,
          cityDistrictTown: city,
          addressType: type,
          state,
        },
      };
      if (data) {
        payload.address._id = data._id;
      }
      //console.log((payload));
      dispatch(createAddress(payload)).then(props.close());
      setName();
      setMobileNumber();
      setPin();
      setLocality();
      setCity();
      setArea();
      setType("Home");
      setTimeout(() => window.location.reload(), 1000);
    } else {
      alert("Fill all mandatory fields");
    }
  };
  return (
    <Modal
      open={props.open}
      onClose={props.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={1}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Name"
                variant="outlined"
                color="secondary"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                color="secondary"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Pin Code"
                variant="outlined"
                color="secondary"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Locality"
                variant="outlined"
                color="secondary"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container mt={2} mb={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Address(area & street)"
                multiline
                rows={4}
                color="secondary"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="City/District/Town"
                variant="outlined"
                color="secondary"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="State"
                variant="outlined"
                defaultValue="West Bengal"
                InputProps={{
                  readOnly: true,
                }}
                color="secondary"
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Address Type"
                value={type}
                onChange={handleChange}
                color="secondary"
              >
                {types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }} mt={2}>
          <Button
            variant="contained"
            size="medium"
            sx={{
              boxShadow: "none",
              border: "1px solid",
              color: "#ffffff",
              fontSize: "12px",

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
            onClick={addAddress}
          >
            Save & Deliver here
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }} mt={1}>
          <Button
            sx={{ textTransform: "none" }}
            varian="text"
            onClick={props.close}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
