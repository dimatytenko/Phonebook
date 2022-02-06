import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';
import './Navigation.scss';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className="Navigation">
      <NavLink exact to="/" className="Navigation__link">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className="Navigation__link">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
