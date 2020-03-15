import React, { useEffect } from 'react';

export const Layout = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.children]);
  return (
    <div>
      {props.header}
      {props.children}
    </div>
  );
};
