import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { getVisibleContactsByName } from '../../redux/contacts/contacts-selectors';

function ContactList() {
  const contacts = useSelector(getVisibleContactsByName);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} />
      ))}
    </ul>
  );
}

export default ContactList;
