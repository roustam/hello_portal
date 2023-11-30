import { styled , Box} from "@mui/system";
import { FormControlLabel, Typography, Radio, RadioGroup } from "@mui/material";
import { palette } from "../theme/palette";


export const GenderFormControlLabel = styled(FormControlLabel)`
  font-size: 26px;
  color: green;
`

export const RadioButtonControl = styled(Radio)`
  background: ${palette.primary.white};
  color: ${palette.text.primary};
  font-size: 24px;
`

export const RadioButtonGroup = styled(RadioGroup)`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content:space-between;
  align-items:center;
`

export const RadioButtonWrapper = styled(Box)`
  display: flex;
  flex-direction:column;
  color: ${palette.text.primary};
  
`

export const RadioButtonTopLabel = styled(Box)`
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  font-size: 15px;
  padding-bottom: 10px;
`

