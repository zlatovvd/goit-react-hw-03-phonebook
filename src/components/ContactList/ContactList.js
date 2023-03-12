import css from './ContactList.module.css';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        idContact={id}
        name={name}
        number={number}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
