import React, { useState } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import IconButton from 'components/IconButton';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import Modal from 'components/Modal';
import './ContactsView.scss';

export default function ContactsView() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <div className="ContactsView">
      <h1 className="ContactsView__title">Phonebook</h1>
      <div className="ContactsView__box">
        <IconButton aria-label="plus" onClick={toggleModal}>
          <PlusIcon width="20" height="20" />
          <p className="ContactsView__add-contact">Add contact</p>
        </IconButton>
        {showModal && (
          <Modal onClose={toggleModal}>
            <ContactForm onClose={toggleModal} />
          </Modal>
        )}

        <Filter />
      </div>

      <div className="ContactsView__list">
        <ContactList />
      </div>
    </div>
  );
}
