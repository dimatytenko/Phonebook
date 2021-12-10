import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id} name={name} number={number} onDelete={onDelete} />
    ))}
  </ul>
);

ContactItem.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ContactList;
