import { FC, useState, FormEvent } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const SearchBarForm = styled.form`
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

const CustomInput = styled.input`
  outline: none;
  background: none;
  border: none;
  font-size: inherit;
  flex: 1;
  color: ${({ theme }) => theme.text};
`;

const SearchButton = styled.button`
  text-align: center;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.darkBlue};
  border: none;
  padding: 15px 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-size: inherit;
`;

interface Props {
  onSubmit: (searchText: string) => void;
}

const SearchBar: FC<Props> = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(searchText);
  };

  return (
    <SearchBarForm onSubmit={handleSubmit}>
      <BsSearch />
      <CustomInput 
        type="text"
        placeholder="Search GitHub username..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <SearchButton>Search</SearchButton>
    </SearchBarForm>
  )
}

export default SearchBar ;