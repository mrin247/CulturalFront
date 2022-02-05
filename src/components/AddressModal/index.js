import {
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

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
const currencies = [
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
  const [currency, setCurrency] = React.useState("Home");
  const handleChange = (event) => {
    setCurrency(event.target.value);
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
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                color="secondary"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Pin Code"
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Locality"
                variant="outlined"
                color="secondary"
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
                value={currency}
                onChange={handleChange}
                color="secondary"
              >
                {currencies.map((option) => (
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
