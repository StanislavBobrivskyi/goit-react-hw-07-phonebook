import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './components/ContactForm.js';
import { ContactList } from './components/ContactList.js';
import { fetchContacts, addContact, deleteContact } from './API';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = async newContact => {
    try {
      const createdContact = await addContact(newContact);
      dispatch({ type: 'contacts/addContact', payload: createdContact });
    } catch (error) {
      console.error('Помилка при додаванні контакту:', error);
    }
  };

  const handleDeleteContact = async contactId => {
    try {
      await deleteContact(contactId);
      dispatch({ type: 'contacts/deleteContact', payload: contactId });
    } catch (error) {
      console.error('Помилка при видаленні контакту:', error);
    }
  };

  return (
    <div>
      <h1>Книга контактів</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Список контактів</h2>
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
}
