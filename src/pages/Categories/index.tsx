import { Box, Typography } from '@mui/material';

import CustomCheckbox from '../../components/CustomCheckbox/CustomCheckbox';
import AppLayout from '../../components/AppLayout/AppLayout';
import { useQuestionarieStepper } from '../../services/useQuestionarieStep';
import { useToggleListOptions } from '../../services/useToggleListOptions'



const CATEGORIES_LIST = [
  {label: 'Business', value: 'business', description: 'Stay updated on the latest business trends, news, and opportunities.'},
  {label: 'Entertainment', value: 'ent', description: 'Stay informed and entertained with the latest news and updates from the world of movies, music, TV shows, gaming, and beyond.'},
  {label: 'General', value: 'general', description: 'A wide range of topics, including current events, lifestyle trends, technological advances, and health tips and more.'},
  {label: 'Science', value: 'science', description: 'Recent breakthroughs, discoveries and innovations in scientific disciplines, including space exploration, biology, physics, technology and more.'},
]
const ALL_CATEGORIES_OPTIONS = new Array(10).fill(CATEGORIES_LIST).flat().map((el, i) => ({...el, value: el.value + i}))
const ALL_CATEGORIES_VALUES = ALL_CATEGORIES_OPTIONS.map((el) => el.value)

const Categories = () => {

  const { activeStep, totalSteps, goNext, skipAll } = useQuestionarieStepper()
  const {selectedOptions, toggleSelect, toggleSelectAll} = useToggleListOptions(ALL_CATEGORIES_VALUES)

  return (
    <AppLayout
      title='Categories'
      description='Select topics that are relevant to running your social media.'
      onSkip={skipAll}
      onNext={goNext}
      onToggleAll={toggleSelectAll}
      total={ALL_CATEGORIES_VALUES.length}
      selected={selectedOptions.length}
      activeStep={activeStep}
      totalSteps={totalSteps}
      hasgradient={true}
    >
      <Box
        display="grid"
        gap={'15px'}
        sx={(theme) => ({
          gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
          [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(152px, 1fr))'
          }
        })}
      >
        {ALL_CATEGORIES_OPTIONS.map((cat) => {
          return <CustomCheckbox
              key={cat.value}
              checked={selectedOptions.includes(cat.value)}
              onChange={toggleSelect}
              onClick={toggleSelect}
              sx={{gridColumn: 'span 1'}}
              value={cat.value}
              description={cat.description}
              label={
                <Typography
                  fontSize={"16px"}
                  lineHeight={'20px'}
                  fontWeight={400}
                >
                  {cat.label}
                </Typography>
              }
            />
        })}
      </Box>
    </AppLayout>
    );
  };
  
  export default Categories;

