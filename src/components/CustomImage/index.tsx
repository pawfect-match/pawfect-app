import React from 'react';
import { View } from 'react-native';

import { ComponentStyle, IconSizeMap, IconType, SpaceStyle } from '@design/type';
import { extractPadding } from '@design/library';

interface CustomImageProps {
  src: IconType.IconSource;
  resize?: 'cover' | 'contain' | 'stretch';
  shape?: IconType.Shape;
  state?: ComponentStyle.State;
  size?: ComponentStyle.SizeWithObject | IconType.Style;
  padding?: SpaceStyle.Margin;

  onLoadError?: () => void;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, resize, state = 'normal', size = 'medium', padding, onLoadError, shape }) => {
  /************
   * function
   ************/

  const getIconSize = () => {
    try {
      if (size && typeof size === 'string') {
        const v = IconSizeMap[size];
        return { width: v, height: v };
      }

      if (size && typeof size === 'object') {
        return size;
      }
    } catch (e) {
      console.error('[CImage]Image size invalid');
    }

    return { width: 0, height: 0 };
  };

  const getSource = () => {
    if (typeof src === 'object' && src?.enabled) {
      const source = src;

      if (state === 'disabled' && source.disabled) return source.disabled;
      if (state === 'selected' && source.selected) return source.selected;
      if (state === 'progress' && source.pressed) return source.pressed;

      return source.enabled;
    }

    return src as IconType.ImageSource;
  };

  /*********
   * render
   *********/

  const renderSvgImage = () => {
    const { width, height } = getIconSize();
    const source = getSource();
    // @ts-ignore
    return <source.default width={width} height={height} />;
  };

  // Object.
  let element = renderSvgImage();

  if (!element) throw new Error('failed make image element');
  if (padding) {
    return (
      <ImageShapeWrapper shape={shape} width={getIconSize().width}>
        <View style={[extractPadding(padding)]}>{element}</View>
      </ImageShapeWrapper>
    );
  } else {
    return (
      <ImageShapeWrapper shape={shape} width={getIconSize().width}>
        {element}
      </ImageShapeWrapper>
    );
  }
};

interface ImageShaperProps {
  shape?: IconType.Shape;
  children: JSX.Element;
  width: number;
}

const ImageShapeWrapper: React.FC<ImageShaperProps> = (props: ImageShaperProps) => {
  if (!props.children) return null;

  const width = props.width;

  const getRadiusForCircle = () => {
    return width * 0.5;
  };

  if (props?.shape === 'circle') {
    return <View style={{ borderRadius: getRadiusForCircle(), width: width, height: width, overflow: 'hidden' }}>{props?.children}</View>;
  } else {
    return props?.children;
  }
};

export { CustomImage };
export type { CustomImageProps };
