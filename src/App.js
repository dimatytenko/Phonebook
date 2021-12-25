import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import IconButton from 'components/IconButton';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import Modal from 'components/Modal';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const names = contacts.map(contact => contact.name);
    if (names.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      setContacts([...contacts, { name: name, number: number, id: nanoid() }]);
    }
  };
  const deleteContact = nameContact => {
    setContacts(contacts.filter(contact => contact.name !== nameContact));
  };

  const handleFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const visibleContactsByName = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <IconButton aria-label="plus" onClick={toggleModal}>
          <PlusIcon width="20" height="20" />
        </IconButton>
      </div>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onSubmit={addContact} onClose={toggleModal} />
        </Modal>
      )}

      <h2>Contacts</h2>

      <Filter value={filter} onChange={handleFilterChange} />

      <ContactList
        contacts={visibleContactsByName()}
        onDelete={deleteContact}
      />
    </Container>
  );
}
