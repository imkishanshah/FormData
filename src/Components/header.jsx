import { Button, Stack, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import Group187 from "../assets/Group 187.svg";

import MuiButton from "./button";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  function onClickTable() {
    navigate("/muiTable");
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 3,
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack>
          <img src={Group187} alt="" />
        </Stack>
      </Stack>
      <Stack>
        <MuiButton variant="contained" onClick={onClickTable}>
          Table
        </MuiButton>
      </Stack>
    </Box>
  );
};

export default Header;
