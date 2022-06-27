import React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, InputBase, Stack, Typography } from "@mui/material";
import pharmacy from "../../images/pharmacy.jpg";
import SearchIcon from "@mui/icons-material/Search";

/**
 * @author
 * @function MedHome
 **/

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#D3D3D3",
  "&:hover": {
    backgroundColor: "#D3D3D3",
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

export const MedHome = (props) => {
  return (
    <Container maxWidth>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box pt={10} pl={14} sx={{ color: "#0B3864" }}>
            <Typography fontSize={"58px"} fontWeight={"600"}>
              Reliable on time
            </Typography>
            <Typography fontSize={"58px"} fontWeight={"600"}>
              home delivery
            </Typography>
          </Box>
          <Box pl={14} sx={{ color: "#B3B9BF" }}>
            <Typography fontSize={"16px"}>
              Our in-house pharmacist ensure your medicines
            </Typography>
            <Typography fontSize={"16px"}>
              reach you when you need them
            </Typography>
          </Box>
          <Box pl={10} pt={3} pr={35}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Medicines"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box pl={13} sx={{ display: "flex" }} pt={3}>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                sx={{
                  width: "130px",
                  color: "whitesmoke",
                  fontSize: "16px",
                  fontWeight: "550",
                  marginRight: "5px",
                  textTransform: "none",
                  backgroundColor: "#E77A14",
                  padding: "5px",
                  "&:hover": {
                    color: "whitesmoke",
                    backgroundColor: "#E77A14",
                  },
                  "&:active": {
                    color: "whitesmoke",
                    backgroundColor: "#E77A14",
                  },
                  "&:focus": {
                    color: "whitesmoke)",
                    backgroundColor: "#E77A14",
                  },
                }}
              >
                Book an appointment
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "130px",
                  color: "whitesmoke",
                  fontSize: "16px",
                  fontWeight: "550",
                  marginRight: "5px",
                  textTransform: "none",
                  backgroundColor: "#EEA20A",
                  padding: "5px",
                  "&:hover": {
                    color: "whitesmoke",
                    backgroundColor: "#EEA20A",
                  },
                  "&:active": {
                    color: "whitesmoke",
                    backgroundColor: "#EEA20A",
                  },
                  "&:focus": {
                    color: "whitesmoke)",
                    backgroundColor: "#EEA20A",
                  },
                }}
              >
                Explore servives
              </Button>
            </Stack>
          </Box>
          <Box pl={14} sx={{ color: "#B3B9BF" }} pt={5}>
            <Typography fontSize={"14px"} fontWeight={"400"}>
              * All merchants are veriefied
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Image src={pharmacy} />
        </Grid>
      </Grid>
    </Container>
  );
};
