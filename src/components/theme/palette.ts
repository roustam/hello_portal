import { PaletteMode } from "@mui/material";
import "@mui/material/styles";

export const palette = {
  mode: "dark" as PaletteMode | undefined,
  primary: {
    light: "#b3eaf4",
    main: "#EE4E34",
    white:"#FCEDDA",
    gray:"#FDF7E4",
    whitegray:"#F3F5FC",
    darkgray: "#EE4E34",
    dark: "#D8442C",
  },
  textField: {
    background: "#F9E0BB",
    color: "#EE4E34",
    placeholder: "#7A829A",
  },
  text: {
    primary: "#EE4E34",
    almostblack: "#EE4E34",
  },
  radioButton: {
    outline: "#7A829A",
  },
  notification: {
    background: "#E72525",
    text: '#fff'
  }
};

declare module "@mui/material/styles" {
  interface Palette {}
  interface PaletteOptions {}
}
