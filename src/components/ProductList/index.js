import React, {useState, useEffect, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  useSelector } from 'react-redux';
import { Grid } from '@material-ui/core/';
import { Product } from '../Product';
import useFetchProduct from '../../hooks/useFetchProduct';
const useStyles = makeStyles(theme => ({
  root: {
    margin: '1rem auto',
    width: '90%'
  }
}));

export const ProductList = () => {
  const loading = useSelector(state => state.products.loading);
  const query = useSelector(state => state.products.query);
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();
  const classes = useStyles();
  const [hasMore,products] = useFetchProduct(pageNumber);
  const lastProductEleRef = useCallback(node => {
    if(loading) return 
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore){
          setPageNumber(prevNumberPage => prevNumberPage + 1)
      }
    })
    if(node) observer.current.observe(node)
  }, [loading, hasMore]);

  useEffect(() => {
    setPageNumber(1)
  }, [query])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.length > 0 &&
          products.map((pro, index) => {
            if (products.length === index + 1) {
              return (
                <Grid ref={lastProductEleRef} key={pro.sku} item xs={12} md={4} lg={3}>
                  <Product info={pro} inLine />
                </Grid>
              );
            }
            return (
              <Grid key={pro.sku} item xs={12} md={4} lg={3}>
                <Product info={pro} inLine />
              </Grid>
            )
          })}
      </Grid>
     
    </div>
  )
};
