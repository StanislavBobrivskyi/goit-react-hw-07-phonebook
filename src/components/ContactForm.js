import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Телефон"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required
      />
      <button type="submit">Додати контакт</button>
    </form>
  );
};

export default ContactForm;
