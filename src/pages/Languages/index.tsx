import { Box, Typography } from '@mui/material';
import AppLayout from '../../components/AppLayout/AppLayout';
import CustomCheckbox from '../../components/CustomCheckbox/CustomCheckbox';
import { useQuestionarieStepper } from '../../services/useQuestionarieStep';
import { useToggleListOptions } from '../../services/useToggleListOptions';

const LANG_LIST = ['English', 'Russian', 'German', 'Arabic', 'Spanish', 'Hebrew']
const LANG_OPTIONS = new Array(10).fill(LANG_LIST).flat().map((el, i) => ({label: el, value: el + i}))
const ALL_LANG_VALUES = LANG_OPTIONS.map((el) => el.value)

const Languages = () => {
  const { selectedOptions, toggleSelect, toggleSelectAll } = useToggleListOptions(ALL_LANG_VALUES)
  const { activeStep, totalSteps, goNext, goBack, skipAll } = useQuestionarieStepper()

  return (
    <AppLayout
      title='Languages'
      description='Select one or more news languages you are interested in.&#13;'
      onSkip={skipAll}
      onNext={goNext}
      onBack={goBack}
      onToggleAll={toggleSelectAll}
      total={ALL_LANG_VALUES.length}
      selected={selectedOptions.length}
      activeStep={activeStep}
      totalSteps={totalSteps}
      hasgradient
    >
      <Box
        display="grid"
        gap={'15px'}
        sx={(theme) => ({
          gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
            gridAutoRows:'59px',
          [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(152px, 1fr))'
          }
        })}
      >
        {LANG_OPTIONS.map((lang,) => {
          return (
            <CustomCheckbox
              key={lang.value}
              checked={selectedOptions.includes(lang.value)}
              onChange={toggleSelect}
              value={lang.value}
              sx={{gridColumn: 'span 1' ,display:'flex', alignItems:'center', verticalAlign:'center', maxHeight:'59px', paddingRight:'14px'}}
              label={
                <Typography

                fontSize={"16px"}
                // lineHeight={'10px'}
                alignSelf={'center'}
                fontWeight={400}>{lang.label}
                </Typography>}
              />
          )
        })}
      </Box>
    </AppLayout>
  )
}

export default Languages