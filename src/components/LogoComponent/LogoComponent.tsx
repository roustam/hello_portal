import React from 'react';
import {BoxProps , Avatar} from "@mui/material";
import { ReactComponent as Logo } from '../icons/logo_mobile.svg';
import LogoFull from "../icons/LogoFull";
import LogoMobile from "../icons/LogoMobile";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface MyComponentProps extends BoxProps{
  withLegend?: boolean | false
  logoHeight?: string | '41px'
  marginTop?: string | '0'
}

const LogoComponent: React.FC<MyComponentProps> = ({ withLegend , logoHeight}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  //small logo on top of login and sing up screens
  if (withLegend) {
    return (<LogoFull/>);
  } else if (matches) {
    return (<Logo  />)
  } else {
    return (<Logo style={{ height:logoHeight, width: 'auto'}}/>)
  }
};

export default LogoComponent;