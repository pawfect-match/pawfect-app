import React from 'react';
import { Div, DivPropsType } from './index';

export const Col = (props: DivPropsType) => {
  return <Div {...props} flexColumn />;
};
