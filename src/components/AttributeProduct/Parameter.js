import React from 'react';
import { useStyles } from './useStyles';

const renderParameter = (attrs, classes) => {
  let result = null;
  console.log(attrs)

  if (attrs.length > 0) {
    result = attrs.map((attr, index) =>{
        console.log(attr)
      return (
        <tr key={attr.priority} className={ !Boolean(index % 2) ? classes.rowEven: ''}>
          <td className={`${classes.col} ${classes.colLeft}`}>{attr.name}</td>
          <td className={`${classes.col} ${classes.colRight}`}>{attr.value}</td>
        </tr>
      );
    });
  }
  return result;
};
export const Parameter = ({ attr }) => {
  const classes = useStyles();

  return (
    <div>
      <table className={classes.tableParameter}>
       {renderParameter(attr, classes)}
      </table>
    </div>
  );
};
