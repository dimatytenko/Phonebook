import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  render() {
    const visibleContacts = this.visibleContactsByName();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.filter} onChange={this.handleFilterChange} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
