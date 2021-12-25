import PropTypes from 'prop-types';
import './Filter.scss';

function Filter({ value, onChange }) {
  return (
    <div className="filter">
      <label className="filter__label">Find contacts by name</label>
      <input
        className="filter__input"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onhChange: PropTypes.func,
};

export default Filter;
