import axios from 'axios';

// URL вашого бекенду. Замініть на свій URL.
const BASE_URL = 'https://65155bd4dc3282a6a3ce44da.mockapi.io/contacts';

// Отримати всі контакти
export const fetchContacts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Додати новий контакт
export const addContact = async contact => {
  try {
    const response = await axios.post(BASE_URL, contact);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Видалити контакт за ID
export const deleteContact = async contactId => {
  try {
    const response = await axios.delete(`${BASE_URL}/${contactId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
