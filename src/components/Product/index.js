import React from 'react';
import { Typography } from '@material-ui/core/';
import { useStyles } from './useStyles';
import { Link } from 'react-router-dom';
import { Price } from '../commons/Price';

export const Product = ({ info, inLine }) => {
  const classes = useStyles();
  const { price, promotionPrices } = info;
  const { bestPrice } = promotionPrices[0] || '0';

  return (
    <Link to={`product/${info.sku}`}>
      <div className={`${classes.cardContainer} ${ Boolean(inLine) ? classes.inLineCardContainer:''}`}>
        <div className={classes.header}>
          {info.images.length > 0 && (
            <img
              className={classes.headerImg}
              alt={info.displayName}
              src={info.images[0].url}
            />
          )}
        </div>
        <div className={classes.body}>
          <Typography variant='h6' className={classes.title}>
            {info.displayName}
          </Typography>
          <Price sellPrice={price.sellPrice} bestPrice={bestPrice} />
        </div>
      </div>
    </Link>
  );
};
