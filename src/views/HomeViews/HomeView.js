import './HomeViews.scss';
import { NavLink } from 'react-router-dom';

const HomeView = () => (
  <div className="HomeView">
    <div className="HomeView__img"></div>
    <h1 className="HomeView__title">
      Did you register ?{' '}
      <NavLink to="/login" className="AuthNav__link">
        Log in
      </NavLink>
      :
      <NavLink to="/register" className="AuthNav__link">
        Sign up;
      </NavLink>
    </h1>
  </div>
);

export default HomeView;
