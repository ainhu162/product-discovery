import React from 'react';
import { Typography } from '@material-ui/core/';
import { useStyles } from './useStyles';
import { Link } from 'react-router-dom';
import useCalcularPromoPercent from '../../hooks/useCalcularPromoPercent';
import formatPrice from './../../commons/formatPrice';

export const Product = ({ info }) => {
  const classes = useStyles();
  const { price, promotionPrices } = info;
  const { bestPrice } = promotionPrices[0] || '0';
  const promo = useCalcularPromoPercent(price.sellPrice, bestPrice);
  return (
    <Link to={`product/${info.sku}`}>
      <div className={classes.cardContainer}>
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
          <div className={classes.priceContainer}>
            <p className={classes.bestPrice}>
              {promo > 0
                ? formatPrice(bestPrice)
                : formatPrice(price.sellPrice)}
              <span className={classes.unitCurrency}>đ</span>
            </p>
            {promo > 0 && (
              <div className={classes.sellerPriceContainer}>
                <span className={classes.sellerPrice}>
                  {formatPrice(price.sellPrice)}
                </span>
                <div className={classes.badgeSale}>{`-${promo}%`}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
