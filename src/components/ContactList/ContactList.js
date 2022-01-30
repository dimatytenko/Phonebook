import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactItem from 'components/ContactItem';
import Loader from '../Loader';

function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  const contacts = useSelector(state =>
    contactsSelectors.getVisibleContacts(state),
  );

  const isLoading = useSelector(contactsSelectors.getLoading);

  return (
    <div>
      {isLoading && <Loader />}

      {contacts.length > 0 && !isLoading && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
