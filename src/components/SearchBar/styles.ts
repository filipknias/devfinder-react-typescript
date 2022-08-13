import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.contentBackground};
  font-size: 20px;
  box-shadow: ${({ theme }) => theme.contentBoxShadow};
  svg {
    color: ${({ theme }) => theme.palette.lightBlue};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 15px;
    padding: 8px 15px;
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