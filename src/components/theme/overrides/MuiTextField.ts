import { Components } from "@mui/material/styles/components";
import { palette } from "../palette";

export const MuiTextField: Components["MuiTextField"] = {
  styleOverrides: {
    root: {
      background: palette.primary.gray,
      borderRadius: "10px",
      color: "black",
      fontSize: "50px !important",
      placeholder: {
        fontSize: "20px",
      },
    },
  },
};
