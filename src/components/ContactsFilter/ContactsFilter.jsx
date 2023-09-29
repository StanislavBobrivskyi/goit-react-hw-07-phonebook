import {
  CenterContainer,
  FilterTitile,
  ContFilter,
  FilterInput,
  FilterPlaceholder,
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
      <ContFilter>
        <FilterInput
          placeholder=" "
          type="text"
          name="filter"
          onChange={handeChangeFilter}
        />
        <FilterPlaceholder htmlFor="filter">
          Find contact by name
        </FilterPlaceholder>
      </ContFilter>
    </CenterContainer>
  );
};
