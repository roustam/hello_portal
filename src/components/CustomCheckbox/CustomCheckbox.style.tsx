import { FormControlLabel, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { palette } from "../theme/palette";

export const CheckboxWrapper = styled('label')`
  background-color: ${palette.primary.gray};
  color: ${palette.primary.main};
  border-radius: 10px;
  padding: 17px 15px;
  box-sizing: border-box;
  border: 2px solid transparent;
  cursor: pointer;
  min-height: 60px;
  user-select: none;
  align-items: center;
  &:hover {
    border: 2px solid ${palette.primary.main};
    border-radius: 10px;
  }
`

export const FormControlLabelWrapper = styled(FormControlLabel)`
  display: flex;
  justify-content: space-between;
  margin-left:0;
  margin-right: 0;
  gap: 4px;
  min-width:100%;
`

export const CheckboxDescription = styled(Typography)`
  margin-top: 15px;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  color: ${palette.text.primary};
`