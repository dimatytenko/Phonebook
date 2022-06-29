import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  backgrounds: {
    appPrimary: 'black',
    appSecondary: 'white',
    modalBackdrop: 'rgba(0, 0, 0, 0.85)',
    modalBody: 'white',
  },
  colors: {
    appPrimary: 'white',
    bodyPrimary: '#2a363b',
  },
  hovers: {
    primary: 'red',
  },
  transitions: {
    primary: '0.5s ease 0s',
  },
});
