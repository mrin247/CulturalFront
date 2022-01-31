import {
  Box,
  Button,
  DialogContent,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import signupImage from "../../images/signup.jpg";
import Visibility from "@mui/icons-material/Visibility";
import Link from "@mui/material/Link";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { green, purple, yellow } from "@mui/material/colors";
import { Dialoge } from "../Dialog";
/**
 * @author
 * @function Login
 **/

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[700]),
  backgroundColor: green[700],
  "&:hover": {
    backgroundColor: green[800],
  },
}));
/**
 * @author
 * @function LoginContent
 **/

export const SignupContent = (props) => {
  const [values, setValues] = React.useState({
    amount: "",
    password: null,
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [confirmValues, setConfirmValues] = React.useState({
    amount: "",
    confirmPassword: null,
    weight: "",
    weightRange: "",
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const confirmHandleChange = (prop) => (event) => {
    setConfirmValues({ ...confirmValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setConfirmValues({
      ...confirmValues,
      showConfirmPassword: !confirmValues.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <DialogContent>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Image src={signupImage} />
        </Grid>
        <Grid item xs={6}>
          <Box mt={3} mb={2}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                required
                id="standard-required"
                label="First Name"
                variant="standard"
                color="success"
              />
              <TextField
                required
                id="standard-required"
                label="Last Name"
                variant="standard"
                color="success"
              />
            </Box>
            <Box mt={2} mb={2}>
              <TextField
                required
                fullWidth
                id="standard-required"
                label="Contact Number"
                variant="standard"
                color="success"
              />
            </Box>
            <Box mt={2} mb={2}>
              <TextField
                required
                fullWidth
                id="standard-required"
                label="Email Address"
                variant="standard"
                color="success"
              />
            </Box>
            <Box mt={2} mb={2}>
              <FormControl variant="standard" fullWidth>
                <InputLabel
                  color="success"
                  required
                  htmlFor="standard-adornment-password"
                >
                  Password
                </InputLabel>
                <Input
                  fullWidth
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  color="success"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        color="success"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box mt={2} mb={2}>
              <FormControl variant="standard" fullWidth>
                <InputLabel
                  color="success"
                  required
                  htmlFor="standard-adornment-password"
                >
                  Confirm Password
                </InputLabel>
                <Input
                  fullWidth
                  placeholder="Confirm Password"
                  color="success"
                  id="standard-adornment-password"
                  autoComplete="off"
                  type={confirmValues.showConfirmPassword ? "text" : "Password"}
                  value={confirmValues.confirmPassword}
                  onChange={confirmHandleChange("confirmPassword")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        color="success"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {confirmValues.showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }} mb={2}>
              <ColorButton
                variant="contained"
                size="medium"
                sx={{ textTransform: "none" }}
              >
                Create Account
              </ColorButton>
            </Box>

            <Divider>OR</Divider>

            <Box
              sx={{ display: "flex", justifyContent: "center" }}
              mb={2}
              pt={3}
            >
              <Typography
                sx={{ fontSize: "16px", color: "#002d68", fontWeight: 600 }}
              >
                Login with
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-around" }}
              mb={2}
            >
              <Button sx={{ color: "#002d68", fontWeight: 600 }}>
                <GoogleIcon />
              </Button>
              <Button sx={{ color: "#002d68", fontWeight: 600 }}>
                <FacebookIcon />
              </Button>
              <Button sx={{ color: "#002d68", fontWeight: 600 }}>
                <TwitterIcon />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </DialogContent>
  );
};
