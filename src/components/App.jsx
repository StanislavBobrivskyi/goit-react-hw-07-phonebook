import { ContactsForm } from './ContactsForm/ContactsForm';
import { Section } from './Section/Section';
import { ContactsList } from './ContactsList/ConctactsList';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors/selectors';
import { selectVisibleContacts } from 'redux/selectors/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Loader } from 'components/FillingLines';
import { ToastContainer, Zoom } from 'react-toastify';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>
      <Section>
        <ContactsFilter />
        {contacts.length > 0 && visibleContacts.length === 0 && (
          <p>No one found with that name</p>
        )}
        {isLoading && <Loader />}
        {contacts.length === 0 && !isLoading && (
          <p>There are no contacts here yet</p>
        )}
        {contacts.length > 0 && <ContactsList />}
      </Section>
      <ToastContainer transition={Zoom} />
    </div>
  );
};
