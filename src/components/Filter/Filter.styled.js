import styled from 'styled-components';

export const FilterLabel = styled.label`
  font-weight: 500;
  font-size: 15px;
  display: block;
  color: black;
`;

export const FilterInput = styled.input`
font-size: 15px;
  display: block;
  width: 100%;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  margin-top: 5px;
  padding: 5px 10px;
  color: black;
  background-color: white;
  border: 1px solid rgba(50, 50, 250, 0.25);
  border-radius: 10px;
  box-shadow: 8px 8px 19px 0px rgba(34, 60, 80, 0.12);
  outline: none;
    &:hover,
    &:focus {
        outline: 1px solid rgba(129, 4, 123, 0.12);
    }
  }
`;
