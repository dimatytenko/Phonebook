import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import IconButton from 'components/IconButton';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import Modal from 'components/Modal';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  addContact = ({ name, number }) => {
    const names = this.state.contacts.map(contact => contact.name);
    if (names.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { name: name, number: number, id: nanoid() },
        ],
      }));
    }
  };
  deleteContact = nameContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name !== nameContact,
      ),
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  visibleContactsByName = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    this.setState({ contacts: parseContacts });
  }
  componentDidUpdate(prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const visibleContacts = this.visibleContactsByName();

    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <IconButton aria-label="plus" onClick={this.toggleModal}>
            <PlusIcon width="20" height="20" />
          </IconButton>
        </div>

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ContactForm
              onSubmit={this.addContact}
              onClose={this.toggleModal}
            />
          </Modal>
        )}

        <h2>Contacts</h2>
        <Filter value={this.filter} onChange={this.handleFilterChange} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
