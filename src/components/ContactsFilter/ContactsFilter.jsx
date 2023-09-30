import {
  CenterContainer,
  FilterTitile,
  ContactFilter,
  FilterInput,
  Lable,
} from './ContactsFilter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handeChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <CenterContainer>
      <FilterTitile>Contacts</FilterTitile>
      <ContactFilter>
        <FilterInput
          placeholder=" "
          type="text"
          name="filter"
          onChange={handeChangeFilter}
        />
        <Lable htmlFor="filter">Find contact by name</Lable>
      </ContactFilter>
    </CenterContainer>
  );
};
