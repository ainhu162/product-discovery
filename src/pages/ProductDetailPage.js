import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { actGetProductDetail } from '../actions/product';
import formatPrice from '../commons/formatPrice';
import { Header } from '../components/Header';
import { Grid, Paper, useTheme } from '@material-ui/core';
import { Slider } from '../components/Slider';
import { OverviewProduct } from '../components/OverviewProduct';
import { AttributeProduct } from '../components/AttributeProduct';
import { RelateProduct } from '../components/RelateProduct';
import { AddToCart } from '../components/AddToCart';

const ProductDetailPage = () => {
  const { id } = useParams();
  const theme = useTheme();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  const { detail, isError } = product;
  const { price, promotionPrices } = detail;
  const { sellPrice } = price || '0';
  const { bestPrice } = promotionPrices ? promotionPrices[0] : '0';
  useEffect(() => {
    dispatch(actGetProductDetail(id));
  }, [id]);

  return (
    <Layout
      header={
        <Header
          title={detail.name}
          price={`${formatPrice(parseInt(bestPrice) ? bestPrice : sellPrice)}đ`}
        />
      }
    >
      {!isError && (
        <Grid container justify='center' style={{ marginTop: '1rem' }}>
          <Grid item xs={12} md={4}>
            <Paper square>
              <Slider images={detail.images} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={10}>
            <Grid container justify='center'>
              <Grid item xs={12}>
                <Paper square>
                  <OverviewProduct
                    name={detail.name}
                    code={id}
                    status={detail.status ? detail.status.sale : ''}
                    bestPrice={bestPrice}
                    sellPrice={sellPrice}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} style={{ padding: theme.spacing(2, 0) }}>
                <Paper square>
                  <AttributeProduct attr={detail.attributeGroups} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper square>
                  <RelateProduct query={detail.productLine ? detail.productLine.name : ''}/>
                </Paper>
              </Grid>
              <Grid item xs={12} style={{ padding: theme.spacing(2, 0) }}>
                <Paper square>
                  <AddToCart id={detail.sku} name={detail.name} price={bestPrice || sellPrice}/>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
};

export default ProductDetailPage;
