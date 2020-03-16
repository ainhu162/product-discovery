import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { useStyles } from './useStyles';
import { Description } from './Description';
import { Parameter } from './Parameter';
import { ComparePrice } from './ComparePrice';
import { TabPanel } from '../commons/TabPanel';

export const AttributeProduct = ({ attr }) => {
  const classes = useStyles();
  const [value, setValue] = useState('param');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        variant='fullWidth'
        aria-label='disabled tabs'
        className={classes.tabContainer}
      >
        <Tab value='desc' label='Mô tả sản phẩm' className={classes.tabTitle}/>
        <Tab value='param' label='Thông số kĩ thuật' className={classes.tabTitle} />
        <Tab value='compare' label='So sánh giá' className={classes.tabTitle} />
      </Tabs>
      <TabPanel value={value} index='desc'>
        <Description />
      </TabPanel>
      <TabPanel value={value} index='param'>
        <Parameter attr={attr}/>
      </TabPanel>
      <TabPanel value={value} index='compare'>
        <ComparePrice />
      </TabPanel>
    </div>
  );
};
