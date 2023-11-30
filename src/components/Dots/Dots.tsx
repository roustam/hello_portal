import { FC } from "react";
import { Box, } from '@mui/material';
import { palette } from '../theme/palette'

type Props = {
  steps: number;
  activeStep?: number
};

const Dots: FC<Props> = ({steps, activeStep}) => {
  return (
    <Box display="flex" alignItems={"center"} justifyContent={"center"} marginBottom={'60px'}>
      {[...new Array(steps).fill(0).map((_, i) => {
        return <Box
          key={i}
          sx={{
            height: '15px',
            width: '15px',
            borderRadius: '50%',
            border: `1px solid ${palette.primary.white}`,
            background: i === activeStep ? palette.primary.white : 'transparent',
            '&:not(:last-child)': {
              marginRight: '10px',
            }

          }}
        />
      })]}
    </Box>
  )
}


export default Dots