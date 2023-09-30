import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  StyledForm,
  Label,
  StyledField,
  StyledError,
  InputContainer,
  SubmitBtn,
} from './ContactsForm.styled';
import { addContact } from 'redux/operations';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number is required'),
});

export const ContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        const { name, number } = values;
        if (
          contacts.find(
            contact =>
              contact.name.toLowerCase() === name.toLowerCase() ||
              contact.number === number
          )
        ) {
          return alert(`${values.name} is already in contacts`);
        }
        dispatch(addContact({ name, phone: number }));
        actions.resetForm();
        toast.success(`Contact ${values.name} added successfully!`, {
          position: 'top-center',
          autoClose: 3000, // Закрити через 3 секунди (за замовчуванням)
          hideProgressBar: false, // Показувати прогрес бар
          closeOnClick: true, // Закривати при кліку на тостер
          pauseOnHover: true, // Зупиняти автозакриття при наведенні
          draggable: true, // Можна перетягувати тостер мишею
          progress: undefined, // За замовчуванням
        });
      }}
    >
      <StyledForm>
        <InputContainer>
          <Label htmlFor="name">
            name:
            <StyledField type="text" name="name" placeholder=" " />
            <StyledError name="name" component="div" />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="number">
            phone number:
            <StyledField type="tel" name="number" placeholder=" " />
            <StyledError name="number" component="div" />
          </Label>
        </InputContainer>

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </StyledForm>
    </Formik>
  );
};
