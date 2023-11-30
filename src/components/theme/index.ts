import { ThemeOptions, createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { MuiButton } from "./overrides/MuiButton";
import { MuiTextField } from "./overrides/MuiTextField";
import { MuiIconButton } from "./overrides/MuiIconButton";
import { MuiCheckbox } from "./overrides/MuiCheckbox";
import { MuiFormControlLabel } from "./overrides/MuiFormControlLabel";

const themeVariables: ThemeOptions = {
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette,
  components: {
    MuiButton,
    MuiTextField,
    MuiIconButton,
    MuiCheckbox,
    MuiFormControlLabel,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1281,
      xl: 1536,
    },
  },
};

const theme = createTheme(themeVariables);

export default theme;
