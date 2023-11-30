import { Avatar, Box, Grid, Typography } from '@mui/material';
import AppLayout from '../../components/AppLayout/AppLayout';
import CustomCheckbox from '../../components/CustomCheckbox/CustomCheckbox';
import { useQuestionarieStepper } from '../../services/useQuestionarieStep';
import { useToggleListOptions } from '../../services/useToggleListOptions';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { palette } from '../../components/theme/palette';

const SOURCE_LIST = [
  {icon: 'source_icons/source_BBC_News.png', label: 'BBC News', value: 'bbc',},
  {icon: 'source_icons/source_The_NY_Times.png', label: 'The New York Times', value: 'nyt'},
  {icon: 'source_icons/source_social.png', label: 'Web site', value: 'web'},
  {label: 'BuzzFeed World', value: 'web'},
]
const SOURCE_LIST_OPTIONS = new Array(10).fill(SOURCE_LIST).flat().map((el, i) => ({...el, value: el.value + i}))
const ALL_SOURCES_VALUES = SOURCE_LIST_OPTIONS.map((el) => el.value)

const Sources = () => {
  const theme = useTheme();
  const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const { selectedOptions, toggleSelect, toggleSelectAll } = useToggleListOptions(ALL_SOURCES_VALUES)
  const { activeStep, totalSteps, goBack, skipAll } = useQuestionarieStepper()



  return (
    <AppLayout
      title='Sources'
      description='You can select one or more preferred sources. You can change the settings at any time.'
      onDone={skipAll}
      onSkip={skipAll}
      onBack={goBack}
      onToggleAll={toggleSelectAll}
      total={ALL_SOURCES_VALUES.length}
      selected={selectedOptions.length}
      activeStep={activeStep}
      totalSteps={totalSteps}
      hasgradient={true}
    >
      <Box
        display="grid"
        sx={(theme) => ({
          gridTemplateColumns: 'repeat(auto-fill, 166px)',
          [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(152px, 1fr))'
          }
        })}
        gap={'15px'}
      >
        {SOURCE_LIST_OPTIONS.map((source,) => {
          return (
            <CustomCheckbox
              key={source.value}
              sx={{ display:"flex", maxHeight:"59px"}}
              value={source.value}
              checked={selectedOptions.includes(source.value)}
              onChange={toggleSelect}
              label={
                <Grid container flexWrap={"nowrap"} alignItems={"center"}>
                  <Grid item paddingRight={"4px"}>
                    {source.icon && <Avatar sx={{ width: '24px', height: '24px' }}
                    variant="square" src={source.icon}/>}
                  </Grid>
                  <Grid item>
                    <Typography
                      fontSize={"16px"}
                      lineHeight={'20px'}
                      color={palette.text.primary}
                    >
                      { !lessThanSmall ? source.label : source.label.slice(0,12) }
                      { lessThanSmall && source.label.length  > 12 ? '...' : '' }
                    </Typography>
                  </Grid>
                </Grid>
              }
            />
          )
        })}
      </Box>
    </AppLayout>
  )

}

export default Sources