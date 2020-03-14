import React from 'react';
import { AppBar, Toolbar, Box,Badge } from '@material-ui/core/';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { GoBack } from '../commons/GoBack';
import { FormSearch } from '../FormSearch';

export const Header = ({title}) => {

  return (
    <AppBar position='static'>
      <Toolbar>
        <GoBack />
        <Box textAlign="center" m={1}>
          {title}
        </Box>
        {!title && <FormSearch/>}
        <Badge color="error" badgeContent="2">
          <ShoppingCartOutlinedIcon/>
        </Badge>
      </Toolbar>
    </AppBar>
  );
};
