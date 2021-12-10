import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.scss';
import IconButton from 'components/IconButton';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';

function ContactItem({ name, number, onDelete }) {
  return (
    <div className="contact">
      <li className="contact__item">
        {name}: {number}
      </li>
      <IconButton onClick={() => onDelete(name)} aria-label="minus">
        <MinusIcon width="20" height="20" />
      </IconButton>
    </div>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
};

export default ContactItem;
