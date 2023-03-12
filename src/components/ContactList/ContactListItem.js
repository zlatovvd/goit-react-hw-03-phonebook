import PropTypes from 'prop-types';

const ContactListItem = ({ idContact, name, number, onDelete }) => (
  <li>
    {name}: {number}
    <button type="button" onClick={() => onDelete(idContact)}>
      Delete
    </button>
  </li>
);

export default ContactListItem;

ContactListItem.propTypes = {
  idContact: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
