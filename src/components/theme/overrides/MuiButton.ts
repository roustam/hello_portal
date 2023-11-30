import { Components } from "@mui/material/styles/components";
import { palette } from "../palette";

export const MuiButton: Components["MuiButton"] = {
  styleOverrides: {
    root: {
      color: "#ffffff",
      borderRadius: "10px",
      padding: "10px 20px",
      background: palette.primary.main,
      // fontSize: "1.4rem",
      fontSize: "15px",
      fontStyle: "normal",
      fontWeight: "400",
      '&:hover': {
        background: palette.primary.dark
      }
    },

  },
};
