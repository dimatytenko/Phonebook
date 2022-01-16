import PropTypes from 'prop-types';
import './Filter.scss';
import { useSelector, useDispatch } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className="filter">
      <label className="filter__label">Find contacts by name</label>
      <input
        className="filter__input"
        type="text"
        value={value}
        onChange={event =>
          dispatch(contactsAction.filter(event.currentTarget.value))
        }
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onhChange: PropTypes.func,
};

export default Filter;
