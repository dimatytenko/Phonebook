import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? navigate(redirectTo) : children}</>;
}
