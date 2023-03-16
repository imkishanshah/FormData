import { Box, Stepper, Step, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BusinessIcon from "@mui/icons-material/Business";
// import { Box } from "@mui/system";
// import {
//   Button,
//   Typography,
//   Box,
//   //   TextField,
//   InputLabel,
//   Input,
//   InputAdornment,
//   Grid,
// } from "@mui/material";

const CustomTheme = createTheme({
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: "filled" },
          style: {
            borderRadius: "100px",
          },
        },
      ],
    },
  },
});

export default function GlobalThemeVariants({
  children,
  onClick,
  variant,
  label,
}) {
  return (
    <Box>
      <ThemeProvider theme={CustomTheme}>
        <TextField
          variant={variant}
          label={label}
          //   id="input-with-icon-adornment"
          //   InputProps={{
          //     endAdornment: (
          //       <InputAdornment position="end">
          //         <PersonIcon />
          //       </InputAdornment>
          //     ),
          //   }}
        />
      </ThemeProvider>
    </Box>
  );
}
export { CustomTheme };
