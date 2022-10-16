// import PropTypes from 'prop-types'; 
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectIsError } from 'redux/selectors.js';
import Contact from "components/Contact";
import getFilteredContacts from 'utils/getFilteredContacts.js';
import { ErrorStyle, List } from './ContactList.styled.js';

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const filteredContacts = getFilteredContacts(contacts, filter);
    const isError = useSelector(selectIsError);

    return (
        <>
            {isError && (<ErrorStyle>Contacts Not Loaded!</ErrorStyle>)}
            {contacts.length !== 0 &&
                <List>
                    {filteredContacts.map(({ id, name, phone }) => (
                        <Contact key={id}
                            id={id}
                            name={name}
                            number={phone}
                        />))}
                </List>}
        </>
)};

export default ContactList;
