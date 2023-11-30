import { Box, TextField} from "@mui/material";
import { styled } from "@mui/system";

export const Root = styled(Box)`
  width: 100%;
  color: #EE4E34;
  input {
    padding: 15px 14px;
    color: #EE4E34;
  }
`;

export const CustomInputField = styled(TextField)`
  
  input {
    pading: 0;
  }
`