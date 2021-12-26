import React from 'react';
import { TextField } from '@mui/material';
import { AppStateContext } from '../../context/deviceContext';
import { Actions } from '../../actions/deviceActions';

export default function SearchController() {
  const { dispatch } = React.useContext(AppStateContext);

  function debounce() {
    let timer: NodeJS.Timeout;
    return function(name: string) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            dispatch(Actions.updateFilters(name));
        }, 500);
    }
  }

  const handleSearch = debounce();

  return (
    <TextField
    id="standard-search"
    label="search device by name"
    type="search"
    variant="standard"
    onChange={e => handleSearch(e.target.value)}
  />
  );
}