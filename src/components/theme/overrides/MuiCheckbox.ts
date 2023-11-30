import { Components } from "@mui/material/styles/components";
import { palette } from "../palette";

export const MuiCheckbox: Components["MuiCheckbox"] = {
  styleOverrides: {
    root: {
      color: palette.primary.main,
    },
  },
};
