import React, { useState } from 'react';
import { InputBase, Button } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './useStyles';

import { useDispatch } from 'react-redux';
import { actSetQuery } from '../../actions/product';
export const FormSearch = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const handleSearch = e => {
    e.preventDefault();
    dispatch(actSetQuery(query));
  };
  const handleChange = e => {
    const { value } = e.target;
    setQuery(value);
  };
  
  return (
    <div className={classes.search}>
      <form onSubmit={handleSearch}>
        <Button type='submit' className={classes.searchIcon}>
          <SearchIcon />
        </Button>
        <InputBase
          fullWidth={true}
          type="search"
          placeholder='Nhập tên, mã sản phẩm'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          value={query}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'search' }}
        />
      </form>
    </div>
  );
};
