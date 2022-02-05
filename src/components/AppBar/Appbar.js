import styles from './Appbar.module.css';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />

      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
}
