import {styled} from "@mui/system";
import {Box} from "@mui/material";
import theme from "../theme";

export const LogoWrapper = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 5px;


  ${theme.breakpoints.down("sm")} {
    justify-content: center;
    //margin: 0;
  }
`