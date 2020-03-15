import React, {useState} from 'react';
import { useStyles } from './useStyles';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
const renderParameter = (attrs, classes) => {
  let result = null;
  if (attrs.length > 0) {
    result = attrs.map((attr, index) => {
      return (
        <tr
          key={attr.priority}
          className={!Boolean(index % 2) ? classes.rowEven : ''}
        >
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
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <div className={ !isShow ? classes.shortDescription:''}>
        <table className={classes.tableParameter}>
          {renderParameter(attr, classes)}
        </table>
      </div>
      <Button onClick={()=>{ setIsShow(prev => !prev)}} className={classes.seeMore}>
        {!isShow && <div className={classes.moreEffect}></div>}
        {!isShow ? <div>Hiển thị nhiều hơn <ExpandMoreIcon /></div> : <div>Ẩn bớt <ExpandLessIcon /></div>}
      </Button>
    </div>
  );
};
