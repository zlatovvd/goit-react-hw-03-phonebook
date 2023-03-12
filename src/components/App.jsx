import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const CONTACTS = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = {
    ...CONTACTS,
  };

  onSubmit = ({ name, number }) => {
    let isSubmit = false;
    const { contacts } = this.state;
    if (
      !contacts.some(value =>
        value.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
      isSubmit = true;
    } else {
      alert(`${name} is already in contacts.`);
    }
    return isSubmit;
  };

  onDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterChange = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  filter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  componentDidMount() {
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          paddingLeft: '40px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} filterChange={this.filterChange} />
        <ContactList contacts={this.filter()} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
