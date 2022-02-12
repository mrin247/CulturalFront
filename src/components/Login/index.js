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
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import loginImage from "../../images/login.jpg";
import Visibility from "@mui/icons-material/Visibility";
import Link from "@mui/material/Link";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { yellow } from "@mui/material/colors";
import { Dialoge } from "../Dialog";
import { forgotPassword, signin } from "../../actions/authActions";

/**
 * @author
 * @function Login
 **/

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[700]),
  backgroundColor: yellow[700],
  "&:hover": {
    backgroundColor: yellow[800],
  },
}));
/**
 * @author
 * @function LoginContent
 **/

export const LoginContent = (props) => {
  const [email, setEmail] = useState();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [openSignup, setOpenSignup] = React.useState(false);
  const openSignupDialog = () => {
    setOpenSignup(true);
  };
  const closeSignupDialog = () => {
    setOpenSignup(false);
    props.close();
  };

  const user = {
    email,
    password: values.password,
  };

  const loginAccount = (e) => {
    e.preventDefault();
    if (!email || !values.password) {
      alert("Please fill all");
    } else {
      dispatch(signin(user)).then(() => props.close());
    }
  };

  const account = {
    email,
  };

  const getResetLink = (e) => {
    e.preventDefault();
    if (!email) {
      alert("please filll email to get link");
    } else {
      dispatch(forgotPassword(account)).then(() => props.close());
    }
  };

  return (
    <DialogContent>
      <Grid container spacing={2}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  onClick={getResetLink}
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
                onClick={loginAccount}
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
              onClick={openSignupDialog}
              underline="hover"
              sx={{ color: "green", fontWeight: 600, fontSize: "16px" }}
            >
              Create an account
            </Link>
            <Dialoge
              open={openSignup}
              onClose={closeSignupDialog}
              page="create"
            />
          </Typography>
        </Grid>
      </Grid>
    </DialogContent>
  );
};
