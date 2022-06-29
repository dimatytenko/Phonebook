import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const navigate = useNavigate();
  return <>{isLoggedIn ? children : navigate('/login', { replace: true })}</>;
}
