// import PropTypes from 'prop-types'; 
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors.js';
import Contact from "components/Contact";
import getFilteredContacts from 'utils/getFilteredContacts.js';
import { List } from './ContactList.styled.js';

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const filteredContacts = getFilteredContacts(contacts, filter);

    return (
        <>
            {contacts.length !== 0 &&
                <List>
                    {filteredContacts.map(({ id, name, number }) => (
                        <Contact key={id}
                            id={id}
                            name={name}
                            number={number}
                        />))}
                </List>}
        </>
)};

export default ContactList;
