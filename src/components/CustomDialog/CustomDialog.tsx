import { FC } from "react";
import { CustomDialogTitle, DialogButton, CustomDialogContent, CustomDialogActions } from './CustomDialog.style'
import Dialog from '@mui/material/Dialog';

type Props = {
  open: boolean
  onClose: () => void;
  onConfirm?: () => void;
}

const AlertDialog: FC<Props> = ({open, onClose, onConfirm}) => {

  return (
      <Dialog
        open={open}
        onClose={onClose}
      >
        <CustomDialogTitle id="alert-dialog-title">
          {"Skip all"}
        </CustomDialogTitle>
        <CustomDialogContent id="alert-dialog-description">
          Are you sure you want to skip the questionnaire?
        </CustomDialogContent>
        <CustomDialogActions>
          <DialogButton onClick={onClose}>Cancel</DialogButton>
          <DialogButton onClick={onConfirm} sx={{color:"#7A829A"}} autoFocus>
              Skip All
          </DialogButton>
        </CustomDialogActions>
      </Dialog>
  );
}

export default AlertDialog