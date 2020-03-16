import React, {useState} from 'react';
import { useStyles } from './useStyles';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
const renderParameter = (attrs, classes) => {
  let result = null;
  if (attrs && attrs.length > 0) {
    result = attrs.map((attr, index) => {
      return (
        <tr
          key={index}
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
  return attr ? (
    <div>
      <div className={ !isShow ? classes.shortDescription:''}>
        <table className={classes.tableParameter}>
          {renderParameter(attr, classes)}
        </table>
      </div>
      <Button onClick={()=>{ setIsShow(prev => !prev)}} className={classes.seeMore}>
        {!isShow && <div className={classes.moreEffect}></div>}
        {!isShow ? <>Hiển thị nhiều hơn <ExpandMoreIcon /></> : <>Ẩn bớt <ExpandLessIcon /></>}
      </Button>
    </div>):(<div>Đang cập nhật</div>)
};
