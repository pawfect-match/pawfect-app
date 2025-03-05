import React from 'react';
import { View, StyleSheet } from 'react-native';
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
  const { width, height } = typeof size === 'string' ? { width: IconSizeMap[size], height: IconSizeMap[size] } : size || { width: 50, height: 50 };

  const source = (() => {
    if (!src) return blank_image; // Default fallback image
    if (typeof src === 'object' && 'enabled' in src) {
      return src[state] || src.enabled;
    }
    return src;
  })();

  const isSvg = typeof source === 'string' && source.includes('<svg');

  /*********
   * Render
   *********/
  return (
    <View style={[styles.wrapper, extractPadding(padding), shape === 'circle' && { borderRadius: width / 2 }]}>
      {isSvg ? (
        <SvgXml xml={source as string} width={width} height={height} />
      ) : (
        <FastImage
          style={[{ width, height, borderRadius: shape === 'circle' ? width / 2 : 0 }]}
          source={typeof source === 'string' ? { uri: source } : source}
          resizeMode={resize}
          onError={onLoadError}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden', // Ensures border radius works correctly
  },
});

export { CustomImage };
export type { CustomImageProps };
