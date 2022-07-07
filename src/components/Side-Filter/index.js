import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import styled from "@emotion/styled";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

/**
 * @author
 * @function SideSummary
 **/

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgb(169 129 45)",
  "&:hover": {
    backgroundColor: "rgb(168 135 67)",
  },
  marginLeft: "auto",
  borderRadius: 20,
  fontSize: "14px",
  textTransform: "none",
  color: "white",
}));

export const SideFilter = (props) => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(10000000);
  // //const stores = props.stores.values();
  // let storeArray = [];
  // //console.log(stores);
  // // for (const s of stores) {
  // //   storeArray.push(s);
  // // }
  // // storeArray.push("store 2");
  // // storeArray.push("store 3");
  // // storeArray = storeArray.slice(0, 3);

  const setRange = (l = 0, h = 90) => {
    setLow(l);
    setHigh(h);
  };

  const resetfilter = () => {
    setRange(0, 10000000);
  };

  return (
    <Box position={"fixed"} sx={{ width: "40vh" }}>
      <Paper elevation={3}>
        <Box mt={1}>
          <Typography
            pt={1}
            pl={2}
            pb={1}
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: "#878787",
              textTransform: "none",
            }}
          >
            Sort & Filters
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ height: "100%" }}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={2}
            mb={2}
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={props.desc ? "H2L" : "L2H"}
              name="radio-buttons-group"
              onChange={props.toggle}
            >
              <FormControlLabel
                value={"L2H"}
                control={<Radio />}
                label={
                  <Typography>
                    Price: Low to High <ArrowDownwardIcon fontSize="18" />
                    <ArrowUpwardIcon ml={5} fontSize="18" />
                  </Typography>
                }
              />

              <FormControlLabel
                value="H2L"
                control={<Radio />}
                label={
                  <Typography>
                    Price : High to Low <ArrowUpwardIcon ml={5} fontSize="18" />
                    <ArrowDownwardIcon fontSize="18" />
                  </Typography>
                }
              />
            </RadioGroup>
          </Box>
          <Divider textAlign="left">
            <Chip label="Price Range" />
          </Divider>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={2}
            mb={2}
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              //defaultValue="female"
              name="radio-buttons-group"
              onChange={props.setLimit(low, high)}
            >
              <FormControlLabel
                value="<1000"
                control={<Radio />}
                label="< 1000"
                onClick={() => setRange(0, 10)}
              />
              <FormControlLabel
                value="1000 < 2000"
                control={<Radio />}
                label="1000 < 2000"
                onClick={() => setRange(10, 20)}
              />
              <FormControlLabel
                value="2000 < 3000"
                control={<Radio />}
                label="2000 < 3000"
                onClick={() => setRange(20, 30)}
              />
              <FormControlLabel
                value="2000 < 3000"
                control={<Radio />}
                label="3000 < 4000"
                onClick={() => setRange(30, 40)}
              />
              <FormControlLabel
                value="> 4000"
                control={<Radio />}
                label="> 3000"
                onClick={() => setRange(40, 100000000)}
              />
            </RadioGroup>
          </Box>
          {/* <Divider textAlign="left">
            <Chip label="Top Stores" />
          </Divider> */}
          {/* <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            ml={2}
            mr={2}
            mt={1}
            //mb={1}
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              //defaultValue="female"
              name="radio-buttons-group"
              //onChange={props.selectedStore("sd")}
            >
              {storeArray.map((s) => (
                <FormControlLabel value={s} control={<Radio />} label={s} />
              ))}
            </RadioGroup>
          </Box> */}
          <Box sx={{ display: "flex" }} ml={2} mr={2} mb={2}>
            <ColorButton onClick={resetfilter}>Clear Filter</ColorButton>
          </Box>
        </Box>
        <Divider />
      </Paper>
    </Box>
  );
};
