import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice.js';
import { ListItem, ContactName, ContactPhone, DeleteBtn } from './Contact.styled.js';
import PropTypes from 'prop-types'; 

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDelete = id => dispatch(deleteContact(id));

    return (
        <ListItem>
            <ContactName>{name}</ContactName>
            <ContactPhone>{number}</ContactPhone>
            <DeleteBtn
                type="button"
                onClick={() => handleDelete(id)}
            >
                Delete
            </DeleteBtn>
        </ListItem>
)};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default Contact;
