import React, { useEffect } from 'react';
import { useStyles } from './useStyles';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchRelatedProductRequest } from '../../actions/product';
import { Grid } from '@material-ui/core';
import { Product } from '../Product';

export const RelateProduct = ({ id,query }) => {
  const dispatch = useDispatch();
  const relatedProducts = useSelector(state => state.product.relatedProducts);
  useEffect(() => {
    dispatch(actFetchRelatedProductRequest(query));
  }, [query]);

  const classes = useStyles();
  return (
    <div className={classes.relatedProductsContainer}>
      <p className={classes.title}>Sản phẩm cùng loại</p>
      <Grid container spacing={3} className={classes.relatedProducts}>
        {relatedProducts.length > 0 &&
            relatedProducts.map(pro => {
              if(pro.sku === id) return null
              return (
                <Grid key={pro.sku} item xs={12} md={4} lg={3}>
                  <Product info={pro} />
                </Grid>
              );
          })}
      </Grid>
    </div>
  );
};
