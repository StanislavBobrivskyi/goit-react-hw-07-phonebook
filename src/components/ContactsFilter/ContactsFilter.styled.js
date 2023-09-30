import { styled } from 'styled-components';

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FilterTitile = styled.h2`
  text-align: center;
  margin-bottom: 25px;
`;

export const ContactFilter = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

export const Lable = styled.label`
  position: absolute;
  top: 5px;
  left: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 15px;
  font-size: 16px;
  color: #666;
  text-align: center;
  transition: transform 0.3s, font-size 0.3s, color 0.3s;
  pointer-events: none;
`;

export const FilterInput = styled.input`
  width: 250px;
  border-radius: 6px;
  outline: none;
  border: 1px solid green;
  padding: 5px;
  background-color: #ffffff;
  box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.5);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    & {
      width: 500px;
    }
  }

  &:focus + ${Lable}, &:not(:placeholder-shown) + ${Lable} {
    background-color: #fff;
    transform: translateY(-80%);
    font-size: 16px;
    color: green;
  }

  font-size: 18px;
`;
