import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { palette } from "../../../../components/theme/palette";
import theme from "../../../../components/theme";

export const FieldArea = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  
  ${theme.breakpoints.down("sm")} {
    height: auto;
    // & > div:nth-child(3){
    //   margin-bottom: 30px;
    // }
  }
`;

export const ResetPasswordFieldArea = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const DynamicFormRoot = styled(Box)<{contentHeight?: number }>(({contentHeight}) => ({
  width: '70%',
  maxWidth: '380px',
  // overflowX: 'hidden',
  // position: 'relative',
  // height: `${contentHeight || 'auto'}px`,
  height: '100%' ,



  [theme.breakpoints.down("sm")]: {
    width: '90%'
  }
}));

export const ForgotPassword = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  color: ${palette.primary.main};
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  margin-bottom: 40px;

  ${theme.breakpoints.down("sm")} {
    margin-bottom: 30px;
  }
  
  //&:hover {
  //  text-decoration: underline;
  //}
`;
