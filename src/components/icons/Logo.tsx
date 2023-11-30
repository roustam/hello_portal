import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Logo = () => {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up('sm'));
  if (isWideScreen) {
  return (
          <svg width="41" height="51" viewBox="0 0 41 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="&#208;&#187;&#208;&#190;&#208;&#179;&#208;&#190;">
              <g id="Vector">
                <path d="M9.62102 11.5587H29.8076C33.9824 11.5587 37.3775 14.9538 37.3775 19.1287V32.3181C37.3775 35.8166 34.5312 38.6642 31.0314 38.6642H21.092C18.5473 38.6642 16.0466 39.5335 14.0507 41.1118L10.5067 43.9127C10.1295 44.2105 9.67779 44.3631 9.21981 44.3631C8.91071 44.3631 8.60034 44.2937 8.30889 44.1524C7.5847 43.8017 7.13429 43.0838 7.13429 42.2801V38.5393C4.23752 37.9526 2.0498 35.3864 2.0498 32.3193V19.1287C2.05107 14.9538 5.44619 11.5587 9.62102 11.5587Z" fill="#30C3DD"/>
                <path d="M22.7643 17.6844H27.607V27.0483C27.607 27.9769 27.4605 28.8554 27.1677 29.6839C26.882 30.5053 26.4285 31.2267 25.807 31.8481C25.1928 32.4624 24.5464 32.8945 23.8678 33.1445C22.925 33.4945 21.7929 33.6695 20.4716 33.6695C19.7073 33.6695 18.8716 33.6159 17.9645 33.5088C17.0646 33.4016 16.311 33.1909 15.7039 32.8766C15.0968 32.5552 14.5397 32.1017 14.0326 31.516C13.5326 30.9303 13.1897 30.3268 13.004 29.7054C12.7041 28.7054 12.5541 27.8197 12.5541 27.0483V17.6844H17.3967V27.2733C17.3967 28.1304 17.6324 28.8018 18.1038 29.2875C18.5824 29.7661 19.2431 30.0053 20.0859 30.0053C20.9215 30.0053 21.5751 29.7696 22.0465 29.2982C22.5251 28.8197 22.7643 28.1447 22.7643 27.2733V17.6844Z" fill="white"/>
                <path d="M39.0219 11.5587C39.0219 14.5883 36.566 17.0442 33.5364 17.0442C30.5069 17.0442 28.051 14.5883 28.051 11.5587C28.051 8.52917 30.5069 6.07324 33.5364 6.07324C36.566 6.07324 39.0219 8.52917 39.0219 11.5587Z" fill="#FF3232"/>
                <path d="M34.2607 9.80936V13.6432H33.2013V11.131C33.0299 11.2613 32.8636 11.3667 32.7025 11.4473C32.543 11.5279 32.3425 11.605 32.1008 11.6787V10.8199C32.4573 10.705 32.7342 10.567 32.9313 10.4059C33.1284 10.2448 33.2827 10.0459 33.3941 9.80936H34.2607Z" fill="white"/>
              </g>
            </g>
          </svg>

  )
  } else {
    return (<svg width="80" height="99" viewBox="0 0 80 99" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.7731 23.0549H58.1615C66.3075 23.0549 72.9321 29.6796 72.9321 37.8256V63.561C72.9321 70.3875 67.3784 75.9437 60.5494 75.9437H41.1556C36.1902 75.9437 31.3109 77.6398 27.4164 80.7195L20.5013 86.1847C19.7652 86.7656 18.8839 87.0635 17.9903 87.0635C17.3871 87.0635 16.7815 86.9281 16.2129 86.6524C14.7998 85.968 13.9209 84.5673 13.9209 82.9991V75.7C8.26872 74.5552 4 69.548 4 63.5634V37.8256C4.00246 29.6796 10.6271 23.0549 18.7731 23.0549Z" fill="#30C3DD"/>
      <path d="M44.4186 35.0076H53.8676V53.2786C53.8676 55.0903 53.5819 56.8045 53.0105 58.4212C52.4531 60.0239 51.5681 61.4315 50.3556 62.644C49.1571 63.8426 47.8958 64.6857 46.5718 65.1735C44.7322 65.8564 42.5232 66.1979 39.9449 66.1979C38.4537 66.1979 36.8231 66.0933 35.0531 65.8843C33.2971 65.6752 31.8268 65.2641 30.6422 64.6509C29.4576 64.0237 28.3705 63.1388 27.381 61.9959C26.4054 60.8531 25.7365 59.6755 25.3741 58.463C24.7888 56.5119 24.4961 54.7837 24.4961 53.2786V35.0076H33.9452V53.7176C33.9452 55.39 34.4051 56.7 35.3249 57.6477C36.2587 58.5815 37.5478 59.0483 39.1923 59.0483C40.8229 59.0483 42.0981 58.5884 43.0179 57.6686C43.9517 56.7349 44.4186 55.4178 44.4186 53.7176V35.0076Z" fill="white"/>
      <path d="M76.1407 23.0549C76.1407 28.9662 71.3486 33.7583 65.4373 33.7583C59.526 33.7583 54.7339 28.9662 54.7339 23.0549C54.7339 17.1436 59.526 12.3516 65.4373 12.3516C71.3486 12.3516 76.1407 17.1436 76.1407 23.0549Z" fill="#FF3232"/>
      <path d="M66.8505 19.6416V27.1222H64.7834V22.2204C64.4489 22.4746 64.1245 22.6803 63.8101 22.8375C63.499 22.9947 63.1077 23.1452 62.636 23.2891V21.6133C63.3318 21.3892 63.8719 21.12 64.2566 20.8055C64.6413 20.4911 64.9423 20.1031 65.1597 19.6416H66.8505Z" fill="white"/>
    </svg>)
  }
}

export default Logo