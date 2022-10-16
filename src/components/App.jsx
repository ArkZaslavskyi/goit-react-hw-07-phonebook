import Layout from "components/Layout";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import { PhonebookTitle, PhonebookSubtitle, Loading } from "./App.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectIsError, selectIsLoading } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <PhonebookSubtitle>Contacts</PhonebookSubtitle>
      <Filter />
      {isLoading && !isError && <Loading>Request in progress...</Loading>}
      <ContactList />
    </Layout>
  );
};
