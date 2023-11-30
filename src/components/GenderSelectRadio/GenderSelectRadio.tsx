import { FC } from "react";
import { FormControlLabel, RadioProps } from "@mui/material";
import { RadioButtonTopLabel, RadioButtonWrapper, RadioButtonControl, RadioButtonGroup,GenderFormControlLabel  } from "./GenderSelectRadio.style";


interface Props extends RadioProps {
  label: string
}

const GenderSelectRadio:FC<Props> = ({label}) => {
  return (
  <RadioButtonWrapper>
    <RadioButtonTopLabel pb={1} fontSize={"14px"}>
      {label}
    </RadioButtonTopLabel>
    <RadioButtonGroup
      row
      defaultValue={'Female'}
      name="radio-buttons"
      >
      <GenderFormControlLabel value="female" control={<RadioButtonControl />} label="Female"
        sx={{'& .MuiSvgIcon-root':{fontSize: 25}}}/>
      <GenderFormControlLabel value="male" control={<RadioButtonControl />} label="Male"
        sx={{'& .MuiSvgIcon-root':{fontSize: 25}}} />
      <GenderFormControlLabel value="other" control={<RadioButtonControl />} label="Other"
        sx={{'& .MuiSvgIcon-root':{fontSize: 25}, marginRight:"2px"}} />
    </RadioButtonGroup>
  </RadioButtonWrapper>
  )
}

export default GenderSelectRadio