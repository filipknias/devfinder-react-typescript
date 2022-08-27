import { FC, useState, useEffect, FormEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FormContainer, Input, SearchButton } from './styles';
import { useSearchParams } from 'react-router-dom';

interface Props {
  onSubmit: (searchText: string) => void;
}

const SearchBar: FC<Props> = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(searchText);
  };

  useEffect(() => {
    const username = searchParams.get('username');
    if (username) setSearchText(username);
  }, [searchParams]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <BsSearch />
      <Input 
        type="text"
        placeholder="Search GitHub username..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <SearchButton>Search</SearchButton>
    </FormContainer>
  )
}

export default SearchBar ;