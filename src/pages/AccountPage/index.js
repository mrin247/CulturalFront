import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Icons & Images
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";

import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import MailIcon from "@mui/icons-material/Mail";
import HttpsIcon from "@mui/icons-material/Https";
import signupImage from "../../images/signup.jpg";
import { signup } from "../../actions/authActions";
import { Layout } from "../../components/Layout";
import { Address } from "../../components/Address";
import { getAddress } from "../../actions/addressActions";
import { AddressModal } from "../../components/AddressModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});

export const AccountSettings = (props) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const address = useSelector((state) => state.address);

  //const user = auth.user;
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [contactNumber, setContactNumber] = React.useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAddress());
  }, []);

  const addresses = address.address.address;
  console.log(addresses);
  React.useEffect(() => {
    if (user !== null) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setContactNumber(user.contactNumber);
    }
  }, [user, address]);

  return (
    <Layout>
      <Box>
        <Container Container maxWidth="md">
          <Box mt={12}>
            <Paper elevation={8}>
              <Box ml={13} mr={13} pt={5} mb={4}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <CssTextField
                      fullWidth
                      focused
                      label="First Name"
                      id="fullWidth"
                      value={firstName}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CssTextField
                      fullWidth
                      focused
                      label="Last Name"
                      id="fullWidth"
                      value={lastName}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <CssTextField
                      fullWidth
                      focused
                      label="Email"
                      id="fullWidth"
                      value={email}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <CssTextField
                      fullWidth
                      focused
                      label="Contact Number"
                      id="fullWidth"
                      value={contactNumber}
                    />
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Typography fontSize={16} fontWeight={600}>
                    My Addresses
                  </Typography>
                  <Divider textAlign="right">
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        boxShadow: "none",
                        border: "1px solid",
                        color: "#a9812d",
                        fontSize: "12px",
                        fontWeight: "600",

                        "&:hover": {
                          border: "1px solid",
                          boxShadow: "none",
                        },
                        "&:active": {
                          boxShadow: "none",
                          border: "1px solid",
                          backgroundColor: "#ffffff",
                        },
                      }}
                      onClick={() => setOpen(true)}
                      onClose={() => setOpen(false)}
                    >
                      Add
                    </Button>
                    <AddressModal open={open} close={() => setOpen(false)} />
                  </Divider>
                  <Box>
                    <List
                      sx={{
                        width: "100%",
                        bgcolor: "background.paper",
                      }}
                    >
                      <Grid Container spacing={2} pb={5}>
                        {addresses &&
                          addresses.map((address) => (
                            <>
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  {address.addressType === "Home" ? (
                                    <HomeIcon />
                                  ) : (
                                    <BusinessIcon />
                                  )}
                                </ListItemAvatar>
                                <Grid item xs={10}>
                                  <ListItemText
                                    primary={
                                      <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                        fontSize={14}
                                        fontWeight={600}
                                      >
                                        {address.name}, {address.mobileNumber}
                                      </Typography>
                                    }
                                    secondary={
                                      <React.Fragment>
                                        <Typography
                                          sx={{ display: "inline" }}
                                          component="span"
                                          variant="body2"
                                          color="text.primary"
                                        >
                                          {address.address}, {address.locality},{" "}
                                          {address.cityDistrictTown},{" "}
                                          {address.pinCode}, {address.state}
                                        </Typography>
                                      </React.Fragment>
                                    }
                                  />
                                </Grid>
                                <Grid item xs={2}>
                                  <Stack direction="row" spacing={1} ml={7}>
                                    <EditIcon sx={{ color: "green" }} />
                                    <DeleteIcon sx={{ color: "red" }} />
                                  </Stack>
                                </Grid>
                              </ListItem>
                              <Divider variant="inset" component="li" />
                            </>
                          ))}
                      </Grid>
                    </List>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};
