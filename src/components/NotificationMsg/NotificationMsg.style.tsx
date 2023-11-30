import {Alert} from "@mui/material";
import {styled} from "@mui/system";
import {palette} from "../theme/palette";
import theme from "../theme";
import Collapse from '@mui/material/Collapse';

export const CustomCollapseWrapper = styled(Collapse)(() => ({
  position:'absolute',

  zIndex:1,
  [theme.breakpoints.down("sm")]: {
    top:'-16px',
  }
}))

export const CustomTopAlert = styled(Alert)(() => ({
      backgroundColor:palette.notification.background,
      color:palette.notification.text,
      maxWidth:'380px',
      marginTop:'16px',
      padding:'10px 15px',
      borderRadius:'10px',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '20px',
    [theme.breakpoints.down("sm")]: {
      borderRadius:0,
      maxWidth:'100%',
    }
    }
  )
)