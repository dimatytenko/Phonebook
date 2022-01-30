import React, { useState } from 'react';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import IconButton from 'components/IconButton';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import Modal from 'components/Modal';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Container>
      <div className="App">
        <h1>Phonebook</h1>
        <IconButton aria-label="plus" onClick={toggleModal}>
          <PlusIcon width="20" height="20" />
        </IconButton>
        {showModal && (
          <Modal onClose={toggleModal}>
            <ContactForm onClose={toggleModal} />
          </Modal>
        )}
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}
