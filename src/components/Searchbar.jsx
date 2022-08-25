import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <MyForm onSubmit={handleSubmit}>
      <MyInput
        onChange={handleQueryChange}
        value={query}
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="search the secret movies"
      />
      <MyButton type="submit">search</MyButton>
    </MyForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const MyForm = styled.form`
  margin: 15px auto;
  padding: 5px;
  width: 1190px;
  background-color: rgba(12, 12, 12, 0.428);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  height: 50px;
`;

const MyInput = styled.input`
  height: 30px;
  border: none;
  width: 300px;
  padding-left: 15px;
  font-family: monospace;
`;

const MyButton = styled.button`
  cursor: pointer;
  font-family: monospace;
  margin-left: 10px;
  height: 34px;
  &:hover {
    opacity: 1;
    color: #2c888b;
  }
`;
