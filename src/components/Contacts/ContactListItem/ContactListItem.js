import PropTypes from 'prop-types';
import { VscClose } from 'react-icons/vsc';
import { ContactItem, ContactText, DeleteBtn } from './ContactListItem.styled';

function ContactListItem({ name, number, onDelete }) {
  return (
    <ContactItem>
      <ContactText>
        {name}: {number}
      </ContactText>
      <DeleteBtn type="button" onClick={onDelete}>
        <VscClose style={{ color: 'rgba(255,0,0,.548)' }} />
      </DeleteBtn>
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
