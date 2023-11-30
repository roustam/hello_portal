import {Link, Box, Typography} from "@mui/material";
import {palette} from "../theme/palette";
const AgreementCheckboxLabel = () => {
  return(
          <Box sx={{display:'flex', alignItems:'center',paddingTop:'2px' }}>
          <Typography sx={{color:palette.text.primary, whiteSpace:'nowrap',
            fontSize:'14px',fontWeight:'normal', paddingRight:'5px'}}>
            I accept the
          </Typography>
            <Link sx={{whiteSpace:'nowrap'}} href={'#'}>Terms of Use</Link>
            <Typography sx={{color:palette.text.primary, padding:"0 5px 0 5px", whiteSpace:'nowrap',
              fontSize:'14px',fontWeight:'normal'}}>
              and
            </Typography>
            <Link sx={{whiteSpace:'nowrap'}} href={'#'}>Privacy policy</Link>
          </Box>  )
}

export default AgreementCheckboxLabel