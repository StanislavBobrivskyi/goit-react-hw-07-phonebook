import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectContactsLoading,
  selectContactsError,
  fetchContacts,
  deleteContact,
} from '../redux/contactsSlice.js';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button onClick={() => handleDelete(contact.id)}>Видалити</button>
        </li>
      ))}
    </ul>
  );
};
