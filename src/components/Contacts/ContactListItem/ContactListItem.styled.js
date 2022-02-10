import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const ContactText = styled.p`
  font-size: 15px;
  color: black;
`;

export const DeleteBtn = styled.button`
  height: 22px;
  padding: 2px 2px;
  background-color: #fff;
  border: 1px solid rgba(95, 4, 91, 0.329);
  border-radius: 50%;
  cursor: pointer;
`;
