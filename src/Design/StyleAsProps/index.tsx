import React from 'react';
import { Text, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Col } from './Col';
import { Row } from './Row';
import { withLayoutStyleProps, withTextStyleProps } from './WithStyleProps';
import { LayoutColorType, LayoutType } from './StyleProps';

export type DivPropsType = TouchableOpacityProps & LayoutType & LayoutColorType;

//@ts-ignore
const Div = withLayoutStyleProps<TouchableOpacityProps, TouchableOpacity>((props, ref) => {
  return <TouchableOpacity {...props} ref={ref} />;
});

const Span = withTextStyleProps<TextProps, Text>((props, ref) => {
  return <Text {...props} ref={ref} />;
});

export { Div, Span, Col, Row };
