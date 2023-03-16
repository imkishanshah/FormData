import { Box, Stack } from "@mui/system";

import { TextField } from "@mui/material";
import MuiButton from "./button";
import { InputAdornment } from "@mui/material";
import Group187 from "../assets/Group 187.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 2,
        borderTop: 2,
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
        <TextField
          label="name"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MuiButton variant="contained">Subscribe</MuiButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Stack>
    </Box>
  );
};

export default Footer;
