import React from 'react';
import { AppBar, Toolbar, Box,Badge, Typography } from '@material-ui/core/';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import GoBack from '../commons/GoBack';
import { FormSearch } from '../FormSearch';
import { useStyles } from './useStyles';
import { useSelector } from 'react-redux';

export const Header = ({title, price}) => {
  const classes = useStyles(); 
  const listCart = useSelector(state => state.cart.listCart)
  return (
    <AppBar position='static' className={Boolean(title) ? classes.appBar:''}>
      <Toolbar>
        <GoBack isDetail={Boolean(title)}/>
        {Boolean(title) &&
        <Box textAlign="center" className={classes.titleContainer} m={1}>
          <Typography variant='h1' className={classes.title} noWrap={true}>{title}</Typography>
          <Typography variant='subtitle1' className={classes.price}>{price}</Typography>
        </Box>
        }
        {!Boolean(title) && <FormSearch/>}
        <Badge color="error" badgeContent={listCart.length}>
          <ShoppingCartOutlinedIcon/>
        </Badge>
      </Toolbar>
    </AppBar>
  );
};
