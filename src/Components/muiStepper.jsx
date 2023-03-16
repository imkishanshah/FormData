import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import { Button, Box, Stepper, Step } from "@mui/material";
import MuiButton from "./button";
import { Stack } from "@mui/system";

const steps = [
  "",
  "",
  "",
  "",
  // "Select master blaster campaign settings",
  // "Create an ad group",
  // "Create an ad",
];

export default function MuiStepper({ onChange1, value }) {
  const steps = ["1", "2", "3", "4"];
  return (
    <Stack>
      <Box sx={{ width: "100%", borderBottom: 2, paddingY: 2 }}>
        <Stepper activeStep={value} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Stack>
  );
}
