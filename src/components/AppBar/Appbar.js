import styles from './Appbar.module.css';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}
