import React,{useState,useEffect} from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { useStyles } from './useStyles';
import { Button, Typography } from '@material-ui/core';
import formatPrice from '../../commons/formatPrice';
import useCountCart from '../../hooks/useCountCart';
import { useDispatch } from 'react-redux';
import { actAddToCart } from '../../actions/cart';
export const AddToCart = ({id, name, price}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const counter = useCountCart(1, price);

    const handleAddToCart = () => {
        const data =  {id, name, price, count: counter.count, total: counter.total}
        dispatch(actAddToCart(data))
    }
    return (
        <div className={classes.addCartContainer}>
            <Button onClick={counter.decrease}>
                <RemoveCircleIcon className={classes.icon}/>
            </Button>
            <Typography className={classes.quantity}>{counter.count}</Typography>
            <Button onClick={counter.increase}>
                <AddCircleIcon className={classes.icon}/>
            </Button>
            <Button onClick={handleAddToCart} className={classes.btnAddToCart}>
                <AddShoppingCartIcon/>
                {formatPrice(counter.total)} đ
            </Button>
        </div>
    )
}
