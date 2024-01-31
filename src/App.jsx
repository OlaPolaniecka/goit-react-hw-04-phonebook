import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';

export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckUnique = name => {
    const { contacts } = this.state;
    const isExistContact = contacts.find(contact => contact.name === name);
    isExistContact && alert('Contact is already exist');
    return !isExistContact;
  };

  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  handleFilterChange = filter => this.setState({ filter });

  getVisableContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visableContacts = this.getVisableContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUnique}
        />
        <h1>Contacts</h1>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={visableContacts}
          onRemove={this.handleRemoveContact}
        />
      </div>
    );
  }
}
