import {
  Box,
  Button,
  Dialog,
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

import loginImage from "../../images/login.jpg";
import Visibility from "@mui/icons-material/Visibility";
import Link from "@mui/material/Link";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { LoginContent } from "../Login";
import { SignupContent } from "../signup";
/**
 * @author
 * @function Login
 **/

export const Dialoge = (props) => {
  return (
    <Dialog open={props.open} onClose={props.onClose} maxWidth="md">
      {/* {props.page === "login" ? (
        <LoginContent close={props.onClose} />
      ) : props.page === "create" ? (
        <SignupContent close={props.onClose} />
      ) : props.page === "forgot" ? (
        <DialogContent>forgot</DialogContent>
      ) : props.page === "reset" ? (
        <DialogContent>reset</DialogContent>
      ) : null} */}

      
        {props.page === "login" ? (
          <LoginContent close={props.onClose} />
        ) : props.page === "create" ? (
          <SignupContent close={props.onClose} />
        ) : props.page === "forgot" ? (
          <DialogContent>forgot</DialogContent>
        ) : props.page === "reset" ? (
          <DialogContent>reset</DialogContent>
        ) : null}
        {/* <Grid container spacing={2}>
          <Grid item xs={6}>
            <Image src={loginImage} />
          </Grid>
          <Grid item xs={6}>
            <Box mt={5} mb={3}>
              <Box mt={5} mb={5}>
                <TextField
                  required
                  fullWidth
                  id="standard-required"
                  label="Email Address"
                  variant="standard"
                  color="secondary"
                />
              </Box>
              <Box mt={5} mb={5}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel
                    color="secondary"
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
                    color="secondary"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          color="secondary"
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
                <Box mt={1} sx={{ fontSize: "14px" }}>
                  <span>Forgot Password ? </span>
                  <Link
                    component="button"
                    onClick={() => alert("/forgot-password")}
                    underline="hover"
                    sx={{ color: "#002d68", fontWeight: 600 }}
                  >
                    Reset password here
                  </Link>
                </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }} mb={2}>
                <ColorButton
                  variant="contained"
                  size="medium"
                  sx={{ textTransform: "none" }}
                >
                  Login
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
                mb={12}
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
            <Typography>
              Don't have an account ?{" "}
              <Link
                component="button"
                onClick={() => alert("/forgot-password")}
                underline="hover"
                sx={{ color: "green", fontWeight: 600, fontSize: "16px" }}
              >
                Create an account
              </Link>
            </Typography>
          </Grid>
        </Grid> */}
      
    </Dialog>
  );
};
