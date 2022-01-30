import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.scss';
import IconButton from 'components/IconButton';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className="contact">
      <div className="contact__item">
        {name}: {number}
      </div>
      <div className="contact__button">
        <IconButton
          onClick={() => dispatch(contactsOperations.deleteContact(id))}
          aria-label="minus"
        >
          <MinusIcon width="20" height="20" />
        </IconButton>
      </div>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
