import React from "react";
import {CustomCollapseWrapper, CustomTopAlert} from "./NotificationMsg.style";

import {AlertProps} from "@mui/material";
import { FC } from "react";

interface Props extends AlertProps {
  label: string

}

const NotificationMsg:FC<Props>  = ({label,}, ) => {
  const [open, setOpen] = React.useState(true);
  return (
          <CustomCollapseWrapper onClick={() => {setOpen(false)}} in={open}>
          <CustomTopAlert
                  icon={false}
                  variant="filled"
                  severity="warning"
                  >
            {label}
          </CustomTopAlert>
          </CustomCollapseWrapper>
  )
}

export default NotificationMsg