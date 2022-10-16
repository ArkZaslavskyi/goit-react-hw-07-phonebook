import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/operations";
import { AddForm, FormField, FormData, FormBtn } from "./ContactForm.styled";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
        alert(`"${name}" is already in contacts.`)
        return;
    }

    dispatch(addContact({ name, phone }));
    resetContactForm();
  };

  const resetContactForm = () => {
    setName('');
    setPhone('');
  };

return (
        <>
            <AddForm onSubmit={handleSubmit}>
                <FormField>
                    Name
                    <FormData
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChangeInput}
                    />
                </FormField>

                <FormField>
                    Number
                    <FormData
                        type="tel"
                        name="number"
                        value={phone}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChangeInput}
                    />
                </FormField>

                <FormBtn type="submit">Add contact</FormBtn>
                
            </AddForm>
        </>
    );
};

export default ContactForm;