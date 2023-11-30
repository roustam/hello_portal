import {Avatar, Grid, Box, Typography } from '@mui/material';
import AppLayout from '../../components/AppLayout/AppLayout';
import CustomTextField from '../../components/CustomTextField/CustomTextField';
import GenderSelectRadio from '../../components/GenderSelectRadio/GenderSelectRadio';
import CustomCheckbox from '../../components/CustomCheckbox/CustomCheckbox';
import { useNavigate } from 'react-router-dom';
import { useToggleListOptions } from '../../services/useToggleListOptions';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckboxChecked from "../../components/CustomCheckbox/checkbox/CheckboxChecked";
import CheckboxUnchecked from "../../components/CustomCheckbox/checkbox/CheckboxUnchecked";

const SOURCE_LIST = [
  {icon: 'social_icons/twitter_icon.svg', label: 'Twitter', value: 'twt',},
  {icon: 'social_icons/linkedin_icon.svg', label: 'LinkedIn', value: 'lnd'},
  {icon: 'social_icons/facebook_icon.svg', label: 'Facebook', value: 'fcb'},
  {icon: 'social_icons/instagram_icon.svg', label: 'Instagram', value: 'ing'},
  {icon: 'social_icons/telegram_icon.svg', label: 'Telegram', value: 'tlg',},
  {icon: 'social_icons/discord_icon.svg', label: 'Discord', value: 'dsc'},
  {icon: 'social_icons/website_icon.svg', label: 'Website', value: 'web'},
]

const SOURCET_LIST_VALUES = SOURCE_LIST.map(el => el.value)

const Profile = () => {
  const navigate = useNavigate();
  const {toggleSelect, selectedOptions} = useToggleListOptions(SOURCET_LIST_VALUES)

  const navigateToCategories = () => {
    navigate('/categories')
  }

  return (
    <AppLayout
    title="Profile"
    description="Please fill in profile information."
    // onNext={navigateToSources}
    onBack={navigateToCategories}
    hasgradient
    >
      <Box display="grid" paddingBottom={"80px"} gap={"15px 70px"} sx={(theme) => ({
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "75px",
          [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
            fontSize:"14px"
          }
        })}>

          <CustomTextField 
            label="Name"
            placeholder="Enter your name"
          />
          <CustomTextField 
            label="Last Name"
            placeholder="Enter your last name"
          />
          <CustomTextField 
            label="Birthday"
            placeholder="MM/DD/YYYY"
            type="date"
          />
          <GenderSelectRadio label={"Gender"}/>
        </Box>

        <Typography fontSize={"24px"} fontWeight={600} marginBottom={"54px"} color={'#EE4E34'}>
          Social media
        </Typography>

        <Box display="grid" paddingBottom={"160px"} gap={"15px"} sx={(theme) => ({
          gridTemplateColumns: "repeat(auto-fill, 165px)",
          [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "repeat(auto-fill, 158px)",
            fontSize:"14px",
            gap:"10px",
          }
        })}>

        {SOURCE_LIST.map((source, i) => {
          return (
            <CustomCheckbox
              sx={{display:'flex', alignContent:"center"}}
              value={source.value}
              checked={selectedOptions.includes(source.value)}
              onChange={toggleSelect}
              key={i}
              label={
                <Grid container flexWrap={"nowrap"} alignItems={"center"}>
                  <Grid item>
                    {source.icon && <Avatar sx={{width: '24px', height: '24px', marginRight: '4px'}} 
                      variant="square" src={source.icon}/>}
                  </Grid>
                  <Grid item sx={{alignContent:"center"}}>
                    <Typography
                      fontSize={"16px"}
                      alignSelf={'center'}
                      fontWeight={400}
                    >
                      {source.label}
                    </Typography>
                  </Grid>
                </Grid>
              }
            />
          )
        })}


        </Box>

      <Box >
      <FormControlLabel sx={{paddingLeft:"10px"}} 
        control={<Checkbox
                defaultChecked
                icon={<CheckboxChecked />}
                checkedIcon={<CheckboxUnchecked />}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>}
        label="Subscribe to our newsteller for receiving the latest news. We never share your email with anyone."
        value={'subscriptionCheckbox'}
        />
      </Box>

      </AppLayout>
  )
}


export default Profile