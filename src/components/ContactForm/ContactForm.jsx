import React from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;

    const inValidateForm = this.validateForm();
    if (!inValidateForm) return;
    onAdd({ id: nanoid(), name, number });
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !number) {
      alert('Some field is empty');
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => this.setState(this.state);

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={this.handleChangeForm}
          required
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={this.handleChangeForm}
          required
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
