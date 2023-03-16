import StepLabel from "@mui/material/StepLabel";
import { Button, Box, Stepper, Step } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CustomTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            borderRadius: "50px",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderRadius: "50px",
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
  type = "submit",
  value,
}) {
  return (
    <Box>
      <ThemeProvider theme={CustomTheme}>
        <Button variant={variant} onClick={onClick} type={type} value={value}>
          {children}
        </Button>
      </ThemeProvider>
    </Box>
  );
}
export { CustomTheme };
// export { Theme };
