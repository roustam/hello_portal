import { Typography, Button } from "@mui/material";
import CustomTextField from "../../../../../components/CustomTextField";
import { ResetPasswordFieldArea } from "../DynamicForm.style";
import Form from "../../../../../store/form-store";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import {palette} from "../../../../../components/theme/palette";
import PoliciesSection from "../PolicySection/PolicySection";
import { useNavigate } from 'react-router-dom';

type Props = {
  props: Form;
};

const ResetForm: FC<Props> = observer(({ props }) => {
  const {
    form: { email },
    onChangeFormHandler,
  } = props;
  let navigate = useNavigate();
  return (
    <ResetPasswordFieldArea>
      <Typography fontWeight={600} fontSize={32} marginBottom={'20px'} align="center" color={palette.primary.main}>
        Reset password
      </Typography>
      <Typography minWidth={'300px'} fontSize={"14px"} lineHeight={'20px'} fontWeight={400} color={palette.text.primary} marginBottom={'30px'} textAlign={'center'}>
        Lost your password? Please enter your email address. You will receive a
        link to create a new password via email.
      </Typography>
      <CustomTextField
        label={"Email"}
        value={email}
        onChange={(e) => onChangeFormHandler("email", e.target.value)}
        placeholder="Enter your email"

      />
      <Button sx={{marginTop:'30px', marginBottom:'auto'}} fullWidth variant="contained" onClick={() => window.location.reload()}>
        Reset password
      </Button>
      <PoliciesSection />
    </ResetPasswordFieldArea>
  );
});

export default ResetForm;
