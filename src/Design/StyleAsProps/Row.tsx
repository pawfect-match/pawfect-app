import React from 'react';
import { Div, DivPropsType } from './index';

export const Row = (props: DivPropsType) => {
  return <Div {...props} flexRow />;
};
