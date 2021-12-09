import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => (
      <ContactItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

ContactItem.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ContactList;
