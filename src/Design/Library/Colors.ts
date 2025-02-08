export const BrandColor = {
  blue: '#395CB6',
  yellow: '#FFF8E9',
};

export const NeutralColor: { [key in `neutral-${0 & 10 & 20 & 30 & 40 & 50 & 60 & 70 & 80 & 90 & 100}`]: string } = {
  'neutral-0': '#000000',
  ['neutral-10']: '#232427',
  ['neutral-20']: '#3f3f3f',
  ['neutral-30']: '#6A6D75',
  ['neutral-40']: '#8D919C',
  ['neutral-50']: '#B1B5C2',
  ['neutral-60']: '#C0C4CF',
  ['neutral-70']: '#D0D3DB',
  ['neutral-80']: '#E0E2E7',
  ['neutral-90']: '#F7F8F9',
  ['neutral-100']: '#ffffff',
};

export const AlertColor = {
  ['alert-critical']: '#EC221F',
  ['alert-major']: '#FE9800',
  ['alert-minor']: '#FCD752',
  ['alert-normal']: '#14AE5C',
};

export const SubColor = {
  ['sub-blue']: '#222946',
};

export declare namespace TypographyColorType {
  type Key = 'neutral-10' | 'neutral-40' | 'neutral-60' | 'neutral-100';
}

export declare namespace UniversalColorType {
  type ColorKeys = keyof typeof BrandColor | keyof typeof NeutralColor | keyof typeof AlertColor;

  type ColorMap = {
    [K in ColorKeys]: (typeof BrandColor & typeof NeutralColor & typeof AlertColor)[K];
  };
  type Value = ColorMap[ColorKeys] | keyof ColorMap | 'transparent';
}
