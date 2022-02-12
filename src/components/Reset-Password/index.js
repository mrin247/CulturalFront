import {
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Input,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import resetImage from "../../images/reset.jpg";
import Visibility from "@mui/icons-material/Visibility";
import Link from "@mui/material/Link";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HttpsIcon from "@mui/icons-material/Https";
import { blue, yellow } from "@mui/material/colors";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../actions/authActions";

/**
 * @author
 * @function ResetPassword
 **/

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
}));
const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#002d68",
  "&:hover": {
    backgroundColor: "rgb(5 57 125)",
  },
}));

export const ResetPassword = (props) => {
  const navigate = useNavigate();
  const { resetToken } = useParams();
  const dispatch = useDispatch();
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
  const auth = useSelector((state) => state.auth);

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

  const credentials = {
    token: resetToken,
    password: values.password,
  };

  const savePassword = (e) => {
    e.preventDefault();
    if (values.password !== confirmValues.confirmPassword) {
      setValues({ ...values, password: null });
      setConfirmValues({ ...confirmValues, password: null });
    } else {
      dispatch(resetPassword(credentials)).then(() => navigate("/"));
    }
  };

  if (auth.authenticate) {
    return <Navigate to={`/`} />;
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            height: "100%",
            overflow: "hidden",
            margin: "10%",

            boxShadow: `
                   0 -3em 3em rgba(0,0,0,0.1),
                   0 0  0 2px rgb(255,255,255),
                   0.3em 0.3em 1em #002d68`,
            borderRadius: 10,
          }}
          p={2}
        >
          <Box mt={2}>
            <Image src={resetImage} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }} pt={3} mt={3}>
            <HttpsIcon sx={{ color: "#002d68", mr: 1, my: 0.5 }} />
            <Input
              fullWidth
              placeholder="Password"
              color="primary"
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: "#002d68" }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }} pt={3} mt={3}>
            <HttpsIcon sx={{ color: "#002d68", mr: 1, my: 0.5 }} />
            <Input
              fullWidth
              placeholder="Confirm Password"
              sx={{ color: "#002d68" }}
              id="standard-adornment-password"
              autoComplete="off"
              type={confirmValues.showConfirmPassword ? "text" : "Password"}
              value={confirmValues.confirmPassword}
              onChange={confirmHandleChange("confirmPassword")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: "#002d68" }}
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
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }} m={5}>
            <ColorButton
              variant="contained"
              size="medium"
              sx={{ textTransform: "none" }}
              onClick={savePassword}
            >
              Save Password
            </ColorButton>
          </Box>
        </Box>
      </Container>
    </>
  );
};
