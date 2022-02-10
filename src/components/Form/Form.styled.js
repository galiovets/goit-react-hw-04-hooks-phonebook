import styled from 'styled-components';

export const FormStyled = styled.form`
  margin-bottom: 20px;
  padding: 20px;
  background-color: rgba(50, 50, 250, 0.18);
  border: 1px solid rgba(129, 4, 123, 0.12);
  border-radius: 20px;
  box-shadow: 8px 8px 19px 0px rgba(34, 60, 80, 0.12);
`;

export const FormLabel = styled.label`
  font-size: 15px;
  display: block;
  color: black;
`;

export const FormInput = styled.input`
  font-size: 15px;
  display: block;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: white;
  color: black;
  border-radius: 8px;
  border: 1px solid rgba(129, 4, 123, 0.12);
  border-radius: 5px;
  outline: none;
    &:hover,
    &:focus {
        outline: 1px solid rgba(129, 4, 123, 0.12);
    }
  }
`;

export const AddButton = styled.button`
  font-size: 15px;
  text-align: center;
  min-width: 70px;
  padding: 5px 10px;
  margin-top: 5px;
  background-color: #fff;
  border: 2px solid rgba(95, 4, 91, 0.329);
  border-radius: 15px;
  cursor: pointer;
`;
