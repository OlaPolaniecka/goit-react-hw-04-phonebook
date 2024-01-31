import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact =>
    setContacts(prev => [...prev, newContact]);

  const handleCheckUnique = name => {
    const isExistContact = contacts.find(contact => contact.name === name);
    isExistContact && alert('Contact is already exist');
    return !isExistContact;
  };

  const handleRemoveContact = id =>
    setContacts(prevContacts =>
      prevContacts.filter(prevContacts => prevContacts.id !== id)
    );

  const handleFilterChange = filter => setFilter({ filter });

  const getVisableContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} onCheckUnique={handleCheckUnique} />
      <h1>Contacts</h1>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={getVisableContacts}
        onRemove={handleRemoveContact}
      />
    </div>
  );
};

export default App;
