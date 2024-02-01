import { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeForm = e => {
    const name = e.target.name;
    const value = e.target.value;
    const number = e.target.number;
    setName(prev => {
      return { ...prev, [name]: value };
    });
    setNumber(prev => {
      return { ...prev, [number]: value };
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;

    const inValidateForm = validateForm();
    if (!inValidateForm) return;
    onAdd({ id: nanoid(), name, number });
  };

  const validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;
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
        onChange={handleChangeForm}
        required
      />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChangeForm}
        required
      />

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
