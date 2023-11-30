import React, {useEffect, useRef, useState} from "react";
import {
  AccountManagerPanel,
  AlternativeLogin,
  CreateAccount,
  FormRoot,
  LoginButtonsSection,
  SignIn,
  StateConfig,
  SignupBreakLine
} from "./FormComponent.style";
import {IconButton, Typography} from "@mui/material";
import Google from "../../../../components/icons/Google";
import LinkedIn from "../../../../components/icons/LinkedIn";
import DynamicForm from "../DynamicForm/DynamicForm";
import PoliciesSection from "../DynamicForm/PolicySection/PolicySection";

import NotificationMsg from "../../../../components/NotificationMsg/NotificationMsg";
import LogoComponent from "../../../../components/LogoComponent/LogoComponent";
import { LogoWrapper } from "../../../../components/LogoComponent/LogoComponent.style";
import BackIcon from "../../../../components/icons/BackIcon";
import {BackIconWrapper} from "./FormComponent.style";

const FormComponent = () => {
  const [formState, setFormState] = useState<StateConfig>(StateConfig.START);
  const prevstate = useRef<StateConfig>(StateConfig.START);

  const wayOfFormConfig = {
    CENTER: {
      START: StateConfig.END,
      CENTER: StateConfig.END,
    },
    END: {
      START: StateConfig.END,
      END: StateConfig.START,
    },
  };

  const onNextStep = (arg: StateConfig) => {
    setFormState(arg);
  };

  const onPreviousStep = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();

    const keysOfConfig = Object.keys(
      wayOfFormConfig[formState as keyof typeof wayOfFormConfig]
    );

    const keyOfPreviousState =
      keysOfConfig.findIndex((item) => item === formState) - 1;

    prevstate.current = formState;

    setFormState(keysOfConfig[keyOfPreviousState] as StateConfig);
  };

  const slideToTheEnd = () => onNextStep(StateConfig.END);
  const slideToTheCenter = () => onNextStep(StateConfig.CENTER);
  // screen height
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth)
    };

    // Attach the event listener to update the screenHeight state on window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <FormRoot state={formState} prevstate={prevstate.current}>

      {formState === StateConfig.START && (
              <NotificationMsg label={'This is a DEMO VERSION of the portal. \n'+
                      'Click LOGIN for browsing its inner pages.'}/>
      )}

      {formState === StateConfig.START ?
        (screenHeight >= 1024) ?
          <LogoWrapper sx={{justifyContent:'center', marginTop:'90px'}}>
            <LogoComponent withLegend/>
          </LogoWrapper>
          : (screenWidth >=832) ?
          <LogoWrapper sx={{ justifyContent:'flex-start',marginBottom:'59px', marginLeft:'15px' }}>
            <LogoComponent logoHeight={'50px'} marginBottom='0'/>
          </LogoWrapper>
          :
            <LogoWrapper sx={{justifyContent:'center', marginTop:'75px'}}>
              <LogoComponent logoHeight={'50px'} marginBottom='0'/>
            </LogoWrapper>

      : formState === StateConfig.CENTER ?
          (screenHeight >= 1024) ?
            <>
            <BackIconWrapper onClick={(e) => onPreviousStep(e)}>
              <BackIcon />
            </BackIconWrapper>
            <LogoWrapper sx={{justifyContent:'center', marginTop:'67px'}}>
              <LogoComponent withLegend/>
            </LogoWrapper>
            </>
            : (screenWidth >= 832) ?
            <LogoWrapper sx={{justifyContent:'center', marginTop:'56px'}}>
              <LogoComponent logoHeight={'100px'}/>
            </LogoWrapper>
            : // for mobile screen width
              <LogoWrapper sx={{marginTop:'175px', marginBottom:'20px'}}>
                <LogoComponent logoHeight={'50px'} sx={{background:'blue', marginBottom:0}}/>
              </LogoWrapper>
      : formState === StateConfig.END ?
            (screenHeight >= 1024) ?
              <LogoWrapper sx={{justifyContent:'center', marginTop:'33px'}}>
                <LogoComponent withLegend/>
              </LogoWrapper>
              : (screenHeight >= 832) ?
              <LogoWrapper sx={{justifyContent:'flex-end', marginTop:0, marginBottom:'20px', marginRight:'15px'}}>
                <LogoComponent logoHeight={'50px'} sx={{marginTop:0}}/>
              </LogoWrapper>
              : (screenWidth > 390) ?
                <LogoWrapper sx={{justifyContent:'flex-end', marginRight:'15px' , marginBottom:'-24px'}}>
                  <LogoComponent logoHeight={'50px'} sx={{marginTop:0}}/>
                </LogoWrapper>
                :
                  <LogoWrapper sx={{justifyContent:'center'}}>
                    <LogoComponent logoHeight={'50px'} sx={{marginTop:0}}/>
                  </LogoWrapper>
      : <></>
      }


      <DynamicForm state={formState} slideToTheCenter={slideToTheCenter} />
      {formState === StateConfig.START && (
        <AccountManagerPanel>
          <AlternativeLogin>
            <Typography fontSize={"14px"} align="center">
              Or login with
            </Typography>
          </AlternativeLogin>

          <LoginButtonsSection>
            <IconButton sx={{padding:0}}>
              <Google />
            </IconButton>
            <IconButton sx={{padding:0}}>
              <LinkedIn />
            </IconButton>
          </LoginButtonsSection>

          <CreateAccount>
            <Typography fontSize={"14px"}>Dont have an account</Typography>
            <SignIn onClick={slideToTheEnd}>Sign up</SignIn>
          </CreateAccount>

          <PoliciesSection />
        </AccountManagerPanel>
      )}
      {formState === StateConfig.END && (
        <AccountManagerPanel>
          <AlternativeLogin>
            <SignupBreakLine align="center">
              Or signup with
            </SignupBreakLine>
          </AlternativeLogin>

          <LoginButtonsSection>
            <IconButton sx={{padding:0}}>
              <Google />
            </IconButton>
            <IconButton sx={{padding:0}}>
              <LinkedIn />
            </IconButton>
          </LoginButtonsSection>

          <CreateAccount>
            <Typography fontSize={"14px"}>Don’t have an account?</Typography>
            <SignIn onClick={onPreviousStep}>Sign in</SignIn>
          </CreateAccount>

          <PoliciesSection />
        </AccountManagerPanel>
      )}
    </FormRoot>

  );
};

export default FormComponent;
