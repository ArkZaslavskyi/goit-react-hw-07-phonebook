import Layout from "components/Layout";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import { PhonebookTitle, PhonebookSubtitle } from "./App.styled";

export const App = () => {
  return (
    <Layout>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <PhonebookSubtitle>Contacts</PhonebookSubtitle>
      <Filter />
      <ContactList />
    </Layout>
  );
};
