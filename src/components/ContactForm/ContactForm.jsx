import { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAdd, onCheckUnique }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeFormName = e => {
    setName(e.target.value);
  };

  const handleChangeFormNumber = e => {
    setNumber(e.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const inValidateForm = validateForm();
    if (!inValidateForm) return;
    onAdd({ id: nanoid(), name, number });
  };

  const validateForm = () => {
    if (!name || !number) {
      alert('Some field is empty');
      return false;
    }
    return onCheckUnique(name);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChangeFormName}
        required
      />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChangeFormNumber}
        required
      />

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
