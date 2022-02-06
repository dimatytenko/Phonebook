import { useSelector } from 'react-redux';
import './Appbar.scss';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className="header">
      <Navigation />

      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
}
