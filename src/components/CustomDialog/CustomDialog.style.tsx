import { ButtonBase, Dialog } from "@mui/material";
import { styled } from "@mui/system";
import { palette } from "../theme/palette";

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export const DialogButton = styled(ButtonBase)(() => ({
	color: palette.primary.main,
	marginRight: "10px",
	textTransform: "uppercase",
	fontSize: "20px",
	fontWeight: "400",
	padding:"8px 15px",
	borderRadius: "10px",
	'&:hover': {
		backgroundColor: "rgba(48, 195, 221, 0.07)",
	}
}))

export const CustomDialog = styled(Dialog)(() => ({
  backgroundColor:palette.primary.white,
  color: palette.primary.whitegray,
  fontSize: "14px",
}))

export const CustomDialogTitle = styled(DialogTitle)(() => ({
	fontSize:"24px",
	fontStyle: "normal",
	fontWeight: "700",
	color: "#000",
	backgroundColor: palette.primary.whitegray,
	paddingTop:"45px",
}))

export const CustomDialogContent = styled(DialogContent)(() => ({
	backgroundColor: palette.primary.whitegray,
	fontSize: "20px",
	fontStyle: "normal",
	fontWeight: "400",
	lineHeight: "22px",
	color: "#000",
	paddingBottom: '52px',
}))

export const CustomDialogActions = styled(DialogActions)(() => ({
	justifyContent: "flex-start",
	backgroundColor: palette.primary.whitegray,
	paddingBottom: "30px",
	paddingLeft: "20px"
}))