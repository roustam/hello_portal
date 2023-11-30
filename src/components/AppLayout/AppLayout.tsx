import { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CategoriesRoot, LeftSide, RightSide, SkipButton,NextButton,BackButton, ContentWrapper, Header, Footer } from "./AppLayout.style";
import { Typography, Box, Container, Link } from '@mui/material';
import LogoWhite from "../icons/LogoWhite";
import Dots from "../Dots/Dots";
import CustomDialog from '../CustomDialog'
import { palette } from '../theme/palette'

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  selected?: number;
  total?: number
  hasgradient?: boolean;
  onSkip?: () => void;
  onNext?: () => void;
  onBack?:() => void;
  onDone?: () => void;
  onToggleAll?: () => void
  onSelectAll?: () => void
  onSelectNone?: () => void
  activeStep?: number
  totalSteps?: number
};

const AppLayout: FC<Props> = ({
  children,
  title,
  description,
  hasgradient,
  onSkip,
  onNext,
  onBack,
  onDone,
  onToggleAll,
  selected,
  total,
  activeStep,
  totalSteps
}) => {
  const { pathname } = useLocation();
  const [isDialogOpened, setDialogOpened] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleDialogOpened = () => {
    setDialogOpened(true);
  };

  const handleDialogClosed = () => {
    setDialogOpened(false);
  };

  return <CategoriesRoot  container>
      <LeftSide item container>
        <Container disableGutters>
          <LogoWhite />
        </Container>

        <Box maxWidth={'450px'} paddingRight={'45px'}>
          <Typography
            marginBottom={'30px'}
            color={palette.primary.white}
            fontSize={'32px'}
            fontStyle={'normal'}
            fontWeight={600}>
            {title}
          </Typography>
          <Typography
            color={palette.primary.white}
            fontSize="24px">{description}
          </Typography>
        </Box>
        <Box>
          {totalSteps ?
            <Dots steps={totalSteps} activeStep={activeStep} />
            :
            <Box minHeight={'76px'}></Box>
          }
          <SkipButton onClick={handleDialogOpened}>
            SKIP ALL
          </SkipButton>
          <CustomDialog onClose={handleDialogClosed} onConfirm={onSkip} open={isDialogOpened} />
        </Box>
      </LeftSide>

      <RightSide item>
        <Header>
            <Typography
                variant="h4" fontWeight={"600"} fontSize={"32px"} color={palette.primary.main}>
              {title}
            </Typography>

          {
            onToggleAll &&
            <Box display="flex" flexDirection={"column"} alignItems={'flex-end'}>
              <Link
                component="button"
                underline="always"
                fontSize="14px"
                onClick={onToggleAll}
                color={palette.primary.main}
                fontWeight={400}
              >
                {/* Select all */}
                {total === selected ? "Deselect all" : "Select all"}
              </Link>
              <Typography fontSize={'15px'} sx={{color: palette.text.primary, marginTop: '12px'}}>
                Selected: {selected}/{total}
              </Typography>
            </Box>
          }
          <Typography
              display={{ xs: 'flex', md: 'none' }}
              fontSize='14px'
              width={'100%'}
              color={palette.primary.darkgray}>
            {description}
          </Typography>
        </Header>

        <ContentWrapper>
          {children}
        </ContentWrapper>

        <Footer hasgradient={hasgradient}>
          {onBack ? <BackButton onClick={onBack}>Back</BackButton> : <div />}
          {onNext && <NextButton onClick={onNext}>Next</NextButton>}
          {onDone && <NextButton onClick={onDone}>Done</NextButton>}
        </Footer>

      </RightSide>
    </CategoriesRoot>;
};

export default AppLayout;
