import React, {useState, useEffect, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core/';
import { Product } from '../Product';
import useFetchProduct from '../../hooks/useFetchProduct';
const useStyles = makeStyles(theme => ({
  root: {
    margin: '1rem auto',
    width: '90%'
  }
}));

export const ProductList = () => {
  const products = useSelector(state => state.products);
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();
  const classes = useStyles();
  const {productList} = products;
  const hasMore = useFetchProduct(products.query, pageNumber);
  const lastProductEleRef = useCallback(node => {
    if(products.loading) return 
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore){
          setPageNumber(prevNumberPage => prevNumberPage + 1)
      }
    })
    if(node) observer.current.observe(node)
  }, [products.loading, hasMore]);

  useEffect(() => {
    setPageNumber(1)
  }, [products.query])
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {productList.length > 0 &&
          productList.map((pro, index) => {
            if (productList.length === index + 1) {
              return (
                <Grid ref={lastProductEleRef} key={pro.sku} item xs={12} md={4} lg={3}>
                  <Product info={pro} />
                </Grid>
              );
            }
            return (
              <Grid key={pro.sku} item xs={12} md={4} lg={3}>
                <Product info={pro} />
              </Grid>
            )
          })}
      </Grid>
     
    </div>
  )
};
