import PropTypes from 'prop-types';
import { ContactListStyled } from './ContactList.styled';
import ContactListItem from '../ContactListItem';

function ContactList({ id, contacts, onDelete }) {
  return (
    <ContactListStyled key={id}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </ContactListStyled>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
