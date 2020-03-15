import React from 'react';
import { withRouter } from 'react-router-dom';
import ArrowIcon from '@material-ui/icons/ArrowBackIos';
import { Button } from '@material-ui/core';
import { useStyles } from './useStyles';
const GoBack = (props) => {
  const classes = useStyles();
  const goBack = () =>{
    props.history.goBack();
  }

  return (
    <div>
      <Button onClick={goBack} className={classes.goBack}>
        <ArrowIcon color={props.isDetail ? 'inherit':'secondary'} />
      </Button>
    </div>
  );
};
export default withRouter(GoBack);
