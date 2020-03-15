import React from 'react';
import { useStyles } from './useStyles';
import { Typography } from '@material-ui/core';
import { Price } from '../commons/Price';
import * as statusTypes from '../../constants/status';

const renderStatus = (status, style) => {
  switch (status) {
    case statusTypes.STOP:
      return (
        <div className={style}>
          {statusTypes.OUT_OF_STOCK}
        </div>
      );
    default:
      return null;
  }
};
export const OverviewProduct = ({
  name,
  code,
  status,
  bestPrice,
  sellPrice
}) => {
    const classes = useStyles();
  return (
    <div className={classes.overviewContainer}>
      <Typography variant='h2' className={classes.title}>
        {name}
      </Typography>
      <p className={classes.code}>
        Mã SP: <span className={classes.codeNumber}>{code}</span>
      </p>
        {renderStatus(status,classes.outOfStockLabel)}
      <Price bestPrice={bestPrice} sellPrice={sellPrice} isInline/>
    </div>
  );
};
