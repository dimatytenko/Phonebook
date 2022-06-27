import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import './Filter.scss';
import { contactsReducer } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const { filter } = contactsReducer;

  return (
    <div className="filter">
      <label className="filter__label">Find contacts by name</label>
      <input
        className="filter__input"
        type="text"
        value={value}
        onChange={event => dispatch(filter(event.currentTarget.value))}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onhChange: PropTypes.func,
};

export default Filter;
