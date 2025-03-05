import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SvgXml } from 'react-native-svg';

import { ComponentStyle, IconSizeMap, IconType, SpaceStyle } from '@design/type';
import { extractPadding } from '@design/library';

import { blank_image } from '@images';

interface CustomImageProps {
  src?: IconType.IconSource | null;
  resize?: 'cover' | 'contain' | 'stretch';
  shape?: IconType.Shape;
  state?: ComponentStyle.State;
  size?: ComponentStyle.SizeWithObject | IconType.Style;
  padding?: SpaceStyle.Margin;
  onLoadError?: () => void;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, resize = 'contain', state = 'enabled', size = 'medium', padding, onLoadError, shape }) => {
  /************
   * Functions
   ************/
  const getIconSize = () => {
    if (size && typeof size === 'string') {
      return { width: IconSizeMap[size], height: IconSizeMap[size] };
    } else if (size && typeof size === 'object') {
      return size;
    }
    return { width: 0, height: 0 };
  };

  const getSource = () => {
    if (!src) return blank_image; // Fallback to default image

    if (typeof src === 'object' && 'enabled' in src) {
      const source = src as IconType.ImageSourceOfState;
      if (state === 'disabled' && source.disabled) return source.disabled;
      if (state === 'selected' && source.selected) return source.selected;
      if (state === 'progress' && source.pressed) return source.pressed;
      return source.enabled;
    }

    return src;
  };

  /*********
   * Render
   *********/
  const source = getSource();
  const { width, height } = getIconSize();

  // Render SVG Image
  const renderSvgImage = () => {
    if (!source) return null;

    if (typeof source === 'object' && 'default' in source) {
      return <source.default width={width} height={height} />;
    }

    if (typeof source === 'string' && source.includes('<svg')) {
      return <SvgXml xml={source} width={width} height={height} />;
    }

    return null;
  };

  // Render Normal Image
  const renderFastImage = () => {
    if (!source) return null;

    if (typeof source === 'string') {
      return <FastImage style={{ width, height }} source={{ uri: source }} resizeMode={resize} onError={onLoadError} />;
    }

    return <FastImage style={{ width, height }} source={source} resizeMode={resize} onError={onLoadError} />;
  };

  let element = renderSvgImage() || renderFastImage();

  // Fallback if no valid source
  if (!element) {
    element = <FastImage style={{ width, height }} source={blank_image} resizeMode={resize} onError={onLoadError} />;
  }

  return (
    <ImageShapeWrapper shape={shape} width={width}>
      <View style={[extractPadding(padding)]}>{element}</View>
    </ImageShapeWrapper>
  );
};

interface ImageShaperProps {
  shape?: IconType.Shape;
  children: JSX.Element;
  width: number;
}

const ImageShapeWrapper: React.FC<ImageShaperProps> = ({ shape, children, width }) => {
  if (!children) return null;

  if (shape === 'circle') {
    return <View style={{ borderRadius: width * 0.5, width, height: width, overflow: 'hidden' }}>{children}</View>;
  }

  return children;
};

export { CustomImage };
export type { CustomImageProps };
