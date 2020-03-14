import React from 'react';
import { Link } from 'react-router-dom';

import ArrowIcon from '@material-ui/icons/ArrowBackIos';
export const GoBack = () => {
  return (
    <div>
      <Link to='/'>
        <ArrowIcon color="secondary" />
      </Link>
    </div>
  );
};
