import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { palette } from "../../../../components/theme/palette";
import theme from "../../../../components/theme";
import useMediaQuery from '@mui/material/useMediaQuery';



export enum StateConfig {
  START = "START",
  CENTER = "CENTER",
  END = "END",
}



export const FormRoot = styled(Box)<{
  state: StateConfig;
  prevstate?: StateConfig;
}>`
  height: 100%;
  background: white;
  width: 550px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;



  box-shadow: 0px 0px 250px 0px rgba(16, 18, 23, 0.73);
  user-select: none;
  //animation-duration: 1s;
  //animation-fill-mode: forwards;
  //position: relative;



  ${theme.breakpoints.up("lg")} {
    width: 630px;
  }
  ${theme.breakpoints.down("md")} {
    width: 550px;
  }
  ${theme.breakpoints.down("sm")} {
    width: 100vw;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    min-height: 800px;
    position: relative;
    box-shadow: none;
  }
  ${theme.breakpoints.up("sm")} {
    ${({ state }) =>
      state === StateConfig.END && "margin-left: auto; border-radius:50px 0 0 50px;"}

    ${({ state }) =>
      state === StateConfig.CENTER && "margin-left: auto; margin-right:auto; border-radius:50px;"}

  ${({ state, prevstate }) =>
      state === StateConfig.START &&
      prevstate === StateConfig.END &&
          ""}

    ${({ state, prevstate }) =>
      state === StateConfig.START &&
      prevstate === StateConfig.CENTER &&
      ""}
  }

  @keyframes fromCenterToBegin {
    0% {
      transform: translateX(calc(50vw - 50%));
    }
    20% {
      width: 800px;
    }
    100% {
      width: 630px;
      border-radius: 50px;
      transform: translateX(0);
    }
  }

  @keyframes fromBeginToCenter {
    0% {
      transform: translateX(0);
    }
    20% {
      width: 800px;
    }
    100% {
      width: 630px;
      border-radius: 50px;
      transform: translateX(calc(50vw - 50%));
    }
  }

  @keyframes fromBeginToEnd {
    0% {
      transform: translateX(0%);
    }
    20% {
      width: 800px;
    }
    100% {
      width: 630px;
      border-radius: 50px;
      transform: translateX(calc(100vw - 100%));
    }
  }

  @keyframes fromEndToBegin {
    0% {
      transform: translateX(calc(100vw - 100%));
    }
    20% {
      width: 800px;
    }

    100% {
      width: 630px;
      border-radius: 50px;
      transform: translateX(0%);
    }
  }
`;

export const AccountManagerPanel = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 380px;
  max-width: 400px;



  ${theme.breakpoints.down("sm")} {
    width: 90%;
    height: 100%;

  }
  //position: relative;
  //flex: 1;
`;

export const SignIn = styled(Typography)`
  color: ${palette.primary.main};
  cursor: pointer;
  font-size: 14px;

  border-bottom: 1px solid ${palette.primary.main};
`;

export const SignInWrapper = styled(Box)`
  
`

export const PoliciesSectionWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  //position: absolute;
  width: 100%;
  padding-bottom: 40px;
  //left: 50%;
  //bottom: 5%;
  //transform: translate(-50%);
  

  & > *:not(:last-child) {
    margin-right: 30px;
  }
  @media only screen and (max-height: 720px) {
    padding-bottom: 20px;
  }
  
  ${theme.breakpoints.down("sm")} {
    padding-bottom: 20px;
  }
`;

export const StyledLink = styled(Typography)`
  color: ${palette.text.primary};
  border-bottom: 1px solid ${palette.text.primary};
  //padding-bottom: 3px;
  cursor: pointer;
  //transition: 0.5s;
  font-size: 14px;

  &:hover {
    color: ${palette.primary.main};
    border-bottom: 1px solid ${palette.primary.main};
  }
`;

export const AlternativeLogin = styled(Box)`
  //position: relative;
  color: ${palette.text.primary};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  font-weight:400;
  font-style: normal;

  ${theme.breakpoints.down("sm")} {
    margin-bottom: 20px;
  }

  
  &::before,
  &::after {
    content: "";
    display: block;
    //position: absolute;
    background: #cdd1e0;
    width: 35%;
    height: 1px;
    top: 50%;
  }

  &::after {
    right: 0;
    transform: translate(0, -50%);
  }
  &::before {
    left: 0;
    transform: translate(0, -50%);
  }
`;

export const SignupBreakLine = styled(Typography)`
  color: ${palette.text.primary};
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
`

export const BackIconWrapper = styled(Box)`
  //position: absolute;
  width: 100%;
  padding-top: 38px;
  padding-left: 48px;
`;

export const LoginButtonsSection = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  & > *:not(:last-child) {
    margin-right: 30px;
  }
`;

export const CreateAccount = styled(Box)`
  display: flex;
  justify-content: center;
  color: ${palette.text.primary};
  margin-bottom: auto;
  
  ${theme.breakpoints.down("sm")} {
    margin-bottom: auto;
  }

  & > * {
    font-size: 14px;
  }
  
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;
