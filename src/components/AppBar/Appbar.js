import { useSelector } from 'react-redux';
import { Container } from '@mui/material';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { SwitchTheme } from '../SwitchTheme';
import { authSelectors } from '../../redux/auth';
import { AppBarWrapper, AppBarBox } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBarWrapper>
      <Container maxWidth="xl">
        <AppBarBox>
          <Navigation />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
          <SwitchTheme />
        </AppBarBox>
      </Container>
    </AppBarWrapper>
  );
}
