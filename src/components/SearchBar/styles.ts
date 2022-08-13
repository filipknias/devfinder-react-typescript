import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.contentBackground};
  font-size: 20px;
  box-shadow: ${({ theme }) => theme.contentBoxShadow};
  svg {
    color: ${({ theme }) => theme.palette.lightBlue};
    padding-left: 20px;
  }
`;

export const Input = styled.input`
  outline: none;
  background: none;
  border: none;
  font-size: inherit;
  flex: 1;
  color: ${({ theme }) => theme.text};
`;

export const SearchButton = styled.button`
  text-align: center;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.darkBlue};
  border: none;
  padding: 15px 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-size: inherit;
`;