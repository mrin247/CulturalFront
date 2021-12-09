/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Button, Stack } from "@mui/material";

//ICONS
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ColorLensIcon from "@mui/icons-material/ColorLens";
/**
 * @author
 * @function Header
 **/
const StyledLogo = styled("img")(({ theme }) => ({
  width: "80px",
  height: "45px",
  marginTop: "12px",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledLoginButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  boxShadow: "none",
  padding: "0 30px",
  color: "#581845",
  fontSize: "16px",
  fontWeight: "600",
  backgroundColor: "#E5E4E4",
  "&:hover": {
    backgroundColor: "#D1D0D0",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#D1D0D0",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem #E5E4E4",
  },
}));

const StyledButtonText = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "#E5E4E4",
  "&:hover": {
    color: "black",
    borderBottom: "1px solid",
    boxShadow: "none",
  },
}));

export const Header = (props) => {
  return (
    <AppBar style={{ backgroundColor: "#a9812d" }}>
      <Toolbar>
        <Box marginLeft="12%">
          <StyledLogo src="https://www.coolgenerator.com/Data/Textdesign/202112/5c27fc32866f72a8acac2e3d45a0fe55.png" />
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for Bengal"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Stack spacing={2} direction="row">
          <StyledButtonText variant="text">
            <ColorLensIcon
              sx={{ justifyContent: "center", marginRight: "2px" }}
            />
            Artist
          </StyledButtonText>
          <StyledButtonText variant="text">
            <AutoAwesomeIcon
              sx={{ justifyContent: "center", marginRight: "2px" }}
            />
            Jewellery
          </StyledButtonText>
          <StyledButtonText variant="text">
            <ModeOfTravelIcon
              sx={{ justifyContent: "center", marginRight: "2px" }}
            />
            Travel
          </StyledButtonText>
          <StyledButtonText variant="text">
            <HistoryEduIcon
              sx={{ justifyContent: "center", marginRight: "2px" }}
            />
            Blog
          </StyledButtonText>
          <StyledButtonText variant="text">
            <MedicalServicesIcon
              sx={{ justifyContent: "center", marginRight: "2px" }}
            />
            Medicine
          </StyledButtonText>
          <StyledButtonText variant="text">
            <Badge
              badgeContent={3}
              color="secondary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <ShoppingBasketIcon
                sx={{ justifyContent: "center", marginRight: "2px" }}
              />
            </Badge>
            Cart
          </StyledButtonText>
          <StyledLoginButton variant="contained">Sign Up</StyledLoginButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
