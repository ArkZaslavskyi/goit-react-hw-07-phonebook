import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ListItem, ContactName, ContactPhone, DeleteBtn } from './Contact.styled.js';
import PropTypes from 'prop-types'; 
import { MdClose } from 'react-icons/md';

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
                <MdClose size={24} />
            </DeleteBtn>
        </ListItem>
)};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default Contact;
