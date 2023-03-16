import { margin, Stack, width } from "@mui/system";
import { Box } from "@mui/system";
import { Typography, TextField } from "@mui/material";
import React from "react";
import Group37301 from "../assets/Group 37301.svg";
import { Margin } from "@mui/icons-material";
import MuiButton from "./button";

const Submit = ({ data, onChange }) => {
  const onChange3 = () => {
    console.log("submitted");
    onChange({ ...data });
  };
  return (
    <Stack>
      <Box>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack sx={{ width: 150, height: 150, marginY: 2 }}>
            <img src={Group37301} alt="" />
          </Stack>
        </Stack>
        <Stack sx={{ textAlign: "center" }}>
          <Typography mb={2} mt={3} variant="h5">
            Submit your quote request
          </Typography>
          <Typography my={1} variant="subtitle1">
            Please review all the information you previously typed in the past
            steps, and if all is okay, submit your message to receive a project
            quote in 24 - 48 hours.
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginY: 2,
          }}
        >
          <MuiButton variant="contained" onClick={onChange3}>
            Submit
          </MuiButton>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Submit;
