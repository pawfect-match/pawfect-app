import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Col } from './Col';
import { Row } from './Row';
import { LayoutColorType, LayoutType } from './StyleProps';
import { withLayoutStyleProps } from './withStyleProps';

export type DivPropsType = TouchableOpacityProps & LayoutType & LayoutColorType;

const Div = withLayoutStyleProps<TouchableOpacityProps, TouchableOpacity>((props, ref) => {
  return <TouchableOpacity {...props} ref={ref} />;
});

export { Div, Col, Row };
