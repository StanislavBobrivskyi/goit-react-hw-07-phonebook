import { styled } from 'styled-components';

export const ContContactList = styled.div`
  background-color: rgba(33, 83, 60, 0.5);
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
  max-width: 700px;
`;

export const ContListUl = styled.ul`
  justify-content: center;

  display: flex;
  flex-direction: column;
  align-items: left;
  list-style: none;
  gap: 10px;
`;

export const ContListItem = styled.li`
  margin-bottom: 12px;
  color: #3119cd;
  display: flex;
  justify-content: space-between;
`;

export const ContListText = styled.p`
  color: #fff;
  font-size: 22px;
  margin-bottom: 10px;

  span.number {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ContListBtn = styled.button`
  max-width: 200px;
  padding: 4px;
  margin-bottom: 10px;
  margin-left: 10px;
  height: 100%;
  font-size: 12px;
  border-radius: 33.5px;
  background: #3cb3ab;
  border: none;
  &:hover {
    color: #fff;
    background-color: #147a73;
    box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.7);
  }
  box-shadow: 0 2px 4px rgba(33, 83, 60, 0.5);
`;
