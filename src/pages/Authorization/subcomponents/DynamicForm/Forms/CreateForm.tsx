import React, { forwardRef } from "react";
import {
  Typography,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

import CustomTextField from "../../../../../components/CustomTextField";
import { FieldArea } from "../DynamicForm.style";
import Form from "../../../../../store/form-store";
import { observer } from "mobx-react-lite";
import CheckboxChecked from "../../../../../components/CustomCheckbox/checkbox/CheckboxChecked";
import CheckboxUnchecked from "../../../../../components/CustomCheckbox/checkbox/CheckboxUnchecked";
import AgreementCheckboxLabel from "../../../../../components/AgreementCheckboxLabel/AgreementCheckboxLabel";
import { useNavigate } from 'react-router-dom';
import { palette } from "../../../../../components/theme/palette";

type Props = {
  props: Form;
};

const CreateForm = observer(
  forwardRef((p: Props, ref) => {
    const { props } = p;
    const {
      form: { email, password, confirmPassword },
      onChangeFormHandler,
      // onCreateNewUserWithEmailAndPassword,
    } = props;

    // const onSignUpHandler = () => {
    //   onCreateNewUserWithEmailAndPassword(email, password);
    // };
    let navigate = useNavigate();
    return (
      <FieldArea ref={ref}>
        <Typography fontWeight={600} fontSize={26} color={palette.primary.main} align="center">
          Create your account
        </Typography>

        <CustomTextField
          label={"Email"}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => onChangeFormHandler("email", e.target.value)}
        />
        <CustomTextField
          type="password"
          label={"Password"}
          placeholder="Enter your email"
          value={password}
          onChange={(e) => onChangeFormHandler("password", e.target.value)}
        />

        <CustomTextField
          type="password"
          label={"Confirm password"}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) =>
            onChangeFormHandler("confirmPassword", e.target.value)
          }
        />
        <FormControl sx={{ mx: 1, color:'red' }}>
          <FormControlLabel
            sx={{marginRight:0 }}
            control={<Checkbox disableRipple color={"primary"}
                               icon={<CheckboxUnchecked />}
                               checkedIcon={<CheckboxChecked />}

            />}
            label={<AgreementCheckboxLabel />}
          />
        </FormControl>
        <Button fullWidth sx={{marginBottom:'30px'}} variant="contained" onClick={(e) => {navigate('/categories')}}>
          Sign up
        </Button>
      </FieldArea>
    );
  })
);

export default CreateForm;
