import { authSelectors, authOperations } from '../../redux/auth';
import { useSelector, useDispatch } from 'react-redux';
import './UserMenu.scss';

export default function UserMenu() {
  const dispatch = useDispatch();
  const nameUser = useSelector(authSelectors.getUsername);
  return (
    <div className="UserMenu">
      <span className="UserMenu__item">
        Welcome,{' '}
        <span className="UserMenu__name">
          {nameUser}
          {' !'}
        </span>
      </span>
      <button
        className="UserMenu__btn"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
