import React from 'react';
import { useStyles } from './useStyles';
import formatPrice from './../../commons/formatPrice';
import useCalcularPromoPercent from '../../hooks/useCalcularPromoPercent';
export const Price = ({ bestPrice, sellPrice, isInline }) => {
  const classes = useStyles();
  const promo = useCalcularPromoPercent(sellPrice, bestPrice);
  return (
    <div
      className={`${classes.priceContainer} ${
        isInline ? classes.inlinePrice : ''
      }`}
    >
      <p className={classes.bestPrice}>
        {formatPrice(promo > 0 ? bestPrice : sellPrice)}
        <span className={classes.unitCurrency}>đ</span>
      </p>
      {promo > 0 && (
        <div className={classes.sellerPriceContainer}>
          <span className={classes.sellerPrice}>{formatPrice(sellPrice)}</span>
          <div className={classes.badgeSale}>{`-${promo}%`}</div>
        </div>
      )}
    </div>
  );
};
