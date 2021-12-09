import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.scss';

function ContactItem({ name, number, onDelete }) {
  return (
    <li className="contact">
      {name}: {number}
      <button
        className="contact__button"
        type="button"
        onClick={() => onDelete(name)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
};

export default ContactItem;
