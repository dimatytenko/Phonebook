import { authSelectors, authOperations } from '../../redux/auth';
import { useSelector, useDispatch } from 'react-redux';
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const nameUser = useSelector(authSelectors.getUsername);
  return (
    <div style={styles.container}>
      <span style={styles.name}>Добро пожаловать, {nameUser}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
