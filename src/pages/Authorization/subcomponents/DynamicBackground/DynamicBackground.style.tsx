import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { palette } from "../../../../components/theme/palette";
import theme from "../../../../components/theme";
export const BackgroundRoot = styled(Box)`
  height: 100vh;
  position: relative;
  background: linear-gradient(
    270deg,
    ${palette.primary.white} 10%,
    ${palette.primary.main} 55%
  );
    ${theme.breakpoints.down("sm")} {
        height: 100vh;
        background: ${palette.primary.white};
        //position: fixed;

    };
`;
