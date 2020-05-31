import React from 'react';
import { InputX } from './style';

const SearchBy = ({ handleChange }) => (
  <InputX placeholder="Search by Title" onChange={handleChange} />
);

export default SearchBy;
