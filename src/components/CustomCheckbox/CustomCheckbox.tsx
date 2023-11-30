import { FC , useState, useEffect } from "react";
import { Checkbox, CheckboxProps, SxProps } from "@mui/material";
import { CheckboxWrapper, FormControlLabelWrapper, CheckboxDescription } from "./CustomCheckbox.style"
import { palette } from "../theme/palette";
import CheckBoxChecked from './checkbox/CheckboxChecked'
import CheckBoxUnchecked from './checkbox/CheckboxUnchecked'
import CheckboxChecked from "./checkbox/CheckboxChecked";

interface Props extends CheckboxProps {
  label: string | React.ReactNode
  description?: string;
  sx?: SxProps<any>
  checked?: boolean
  value: string
  onChange?: (value: any) => void
  onClick?: (value: any) => void
};


const CustomCheckbox:FC<Props> = ({onChange, label, value, description, checked, sx}) => {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    if (checked !== isChecked) setIsChecked(checked)
  }, [checked, isChecked])

  const checkHandler = (e: any) => {
    if (onChange) onChange(e.target.value)
    setIsChecked(e.target.checked)
  }

  return (
    <CheckboxWrapper
     htmlFor={value}
     sx={{
        borderColor: isChecked ? palette.primary.main : 'transparent',
        ...sx,
      }}
    >
      <FormControlLabelWrapper
        onChange={checkHandler}
        value={value}
        checked={isChecked}
        sx={{alignItems: description ? 'flex-start' : 'center'}}
        control={
          <Checkbox
            id={value}
            icon={<CheckBoxUnchecked />}
            checkedIcon={<CheckboxChecked />}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{
              '& .MuiSvgIcon-root': { fontSize: 20 },
              // '&.MuiCheckbox-root': {
              //   padding: 0,
              // }
              padding:0,
              margin:0
            }}
          />
        }
        label={label}
        labelPlacement="start"
      />

      { description && <CheckboxDescription>{description}</CheckboxDescription> }
    </CheckboxWrapper>
  )
}

export default CustomCheckbox