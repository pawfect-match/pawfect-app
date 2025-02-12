import React from 'react';
import { Text } from 'react-native';

import { TypographyType, SpaceStyle } from '../type';
import { UniversalColorType } from '../library';

const TextSize = {
  HeadlineL: 32,
  HeadlineM: 28,
  HeadlineS: 24,
  TitleXL: 20,
  TitleL: 18,
  TitleM: 15,
  TitleS: 13,
  SubTitleXL: 20,
  SubTitleL: 18,
  SubTitleM: 15,
  SubTitleS: 13,
  LabelL: 15,
  LabelM: 13,
  LabelS: 11,
  BodyL: 16,
  BodyM: 14,
  BodyS: 12,
};

const TextLetterSpacing = {
  HeadlineL: 0,
  HeadlineM: 0,
  HeadlineS: 0.1,
  TitleXL: 0,
  TitleL: 0,
  TitleM: 0.15,
  TitleS: 0.1,
  SubTitleXL: 0,
  SubTitleL: 0,
  SubTitleM: 0,
  SubTitleS: 0,
  LabelL: 0.3,
  LabelM: 0.4,
  LabelS: 0.4,
  BodyL: 0.1,
  BodyM: 0,
  BodyS: 0.1,
};

const TextLineHeight = {
  HeadlineL: 40,
  HeadlineM: 36,
  HeadlineS: 32,
  TitleXL: 28,
  TitleL: 28,
  TitleM: 24,
  TitleS: 20,
  SubTitleXL: 26,
  SubTitleL: 24,
  SubTitleM: 20,
  SubTitleS: 18,
  LabelL: 18,
  LabelM: 17,
  LabelS: 16,
  BodyL: 24,
  BodyM: 21,
  BodyS: 18,
};

const TextFontFamily = {
  HeadlineL: 'IBMPlexSansKR-Bold',
  HeadlineM: 'IBMPlexSansKR-Bold',
  HeadlineS: 'IBMPlexSansKR-Bold',
  TitleXL: 'IBMPlexSansKR-SemiBold',
  TitleL: 'IBMPlexSansKR-SemiBold',
  TitleM: 'IBMPlexSansKR-SemiBold',
  TitleS: 'IBMPlexSansKR-SemiBold',
  SubTitleXL: 'IBMPlexSansKR-Medium',
  SubTitleL: 'IBMPlexSansKR-Medium',
  SubTitleM: 'IBMPlexSansKR-Medium',
  SubTitleS: 'IBMPlexSansKR-Medium',
  LabelL: 'IBMPlexSansKR-Bold',
  LabelM: 'IBMPlexSansKR-Bold',
  LabelS: 'IBMPlexSansKR-Bold',
  BodyL: 'IBMPlexSansKR-Regular',
  BodyM: 'IBMPlexSansKR-Regular',
  BodyS: 'IBMPlexSansKR-Regular',
};

const FontStyles = [
  'HeadlineL',
  'HeadlineM',
  'HeadlineS',
  'TitleXL',
  'TitleL',
  'TitleM',
  'TitleS',
  'SubTitleXL',
  'SubTitleL',
  'SubTitleM',
  'SubTitleS',
  'LabelL',
  'LabelM',
  'LabelS',
  'BodyL',
  'BodyM',
  'BodyS',
];

const TextFontWeight = {
  HeadlineL: '700',
  HeadlineM: '700',
  HeadlineS: '700',
  TitleXL: '600',
  TitleL: '600',
  TitleM: '600',
  TitleS: '600',
  SubTitleXL: '500',
  SubTitleL: '500',
  SubTitleM: '500',
  SubTitleS: '500',
  LabelL: '700',
  LabelM: '700',
  LabelS: '700',
  BodyL: '400',
  BodyM: '400',
  BodyS: '400',
};

export interface TextLayoutEvent {
  lines: TextLayout[];
  target: number;
}

interface TextLayout {
  capHeight: number;
  ascender: number;
  descender: number;
  width: number;
  height: number;
  xHeight: number;
  x: number;
  y: number;
}

interface Props {
  children: TypographyType.Value;
  fillWidth?: boolean;
  shrinkWidth?: boolean;
  color?: UniversalColorType.Value;
  bold?: TypographyType.Weight;
  margin?: SpaceStyle.Margin;
  numberOfLines?: number;
  onPress?: () => void;
  onTextLayout?: (event: TextLayoutEvent) => void;
  textAlign?: TypographyType.TextAlign;
}

export { FontStyles };
