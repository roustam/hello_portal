import React, { forwardRef, useImperativeHandle } from "react";
import { FieldArea, ForgotPassword } from "../DynamicForm.style";
import { Button, Typography } from "@mui/material";
import CustomTextField from "../../../../../components/CustomTextField";
import { observer } from "mobx-react-lite";
import Form from "../../../../../store/form-store";
import { useNavigate } from 'react-router-dom';

type Props = {
  slideToTheCenter: () => void;
  props: Form;
};

const LoginForm = observer(
  forwardRef((p: Props, ref) => {
    const { slideToTheCenter, props } = p;
    const {
      form: { email, password },
      onChangeFormHandler,
    } = props;
    let navigate = useNavigate();
    return (
      <FieldArea ref={ref}>
        <Typography fontWeight={600} color={"#EE4E34"} fontSize={"3.2rem"} align="center">
          Please login
        </Typography>
        <CustomTextField
          value={email}
          onChange={(e) => onChangeFormHandler("email", e.target.value)}
          label={"Email"}
          type="email"
          placeholder="Enter your email"
        />
        <CustomTextField
          value={password}
          onChange={(e) => onChangeFormHandler("password", e.target.value)}
          label={"Password"}
          type="password"
          placeholder="Enter your password"
        />
        <Button onClick={(e) => {navigate('/categories')}} fullWidth variant="contained" >
          Login
        </Button>
        <ForgotPassword onClick={slideToTheCenter}>
          Reset lost password
        </ForgotPassword>
      </FieldArea>
    );
  })
);

export default LoginForm;
