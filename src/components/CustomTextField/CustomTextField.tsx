import { useState } from "react";
import { Box, TextField, TextFieldProps, Typography } from "@mui/material";
import { Root, CustomInputField } from "./CustomTextField.style";
import { FC } from "react";
import { palette } from "../theme/palette";
import PasswordVisabilityOff from "../icons/PasswordVisabilityOff";
import PasswordVisabilityOn from "../icons/PasswordVisabilityOn";
import {Simulate} from "react-dom/test-utils";


import focus = Simulate.focus;

const CustomTextField: FC<TextFieldProps> = ({
  label,
  placeholder,
  type,
  value,
  onChange,
}) => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const changePasswordState = () => {
    setPasswordShow((prev) => !prev);
  };

  const endAdornment =
    type === "password" ? (
      <Box onClick={changePasswordState}>
        {passwordShow ? <PasswordVisabilityOn /> : <PasswordVisabilityOff />}
      </Box>
    ) : undefined;

  const borderStyles = 'border-radius: 10px;'



  return (
    <Root>
      <Typography pb={1} fontSize={"14px"}>
        {label}
      </Typography>
      <CustomInputField
        onChange={onChange}
        value={value}
        InputProps={{
          endAdornment
        }}

        type={passwordShow ? "text" : type}
        sx={{
          '.MuiOutlinedInput-root': { borderRadius: "10px" },
          input: {
            color: palette.textField.color,
            fontSize: "14px",
          },

          placeholder: {
            fontSize: "14px",
            color: palette.textField.color,
          },
        }}
        fullWidth
        placeholder={placeholder}
      />
    </Root>
  );
};

export default CustomTextField;
