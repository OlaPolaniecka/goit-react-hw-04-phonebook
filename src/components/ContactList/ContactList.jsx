import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li>
      {name}: {number} <button onClick={() => onRemove(id)}>Delete</button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem {...contact} onRemove={onRemove} />
        </li>
      ))}
    </ul>
  );
};

ContactList.prototype = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  onRemove: PropTypes.func,
};

export default ContactList;
