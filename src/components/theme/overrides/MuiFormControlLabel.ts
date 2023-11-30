import { Components } from "@mui/material/styles/components";
import { palette } from "../palette";

export const MuiFormControlLabel: Components["MuiFormControlLabel"] = {
  styleOverrides: {
    label: {
      fontSize: "14px",
      color: palette.text.almostblack,
      fontStyle: 'normal',
      fontWeight: 400
    },
  },
};
