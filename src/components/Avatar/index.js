import React from 'react';
import {Image, Platform, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import colors from '../../assets/colors';

const Avatar = ({
  size,
  width,
  height,
  radius,
  style,
  src,
  defaultSrc,
  loadingSrc,
  blurRadius,
  resizeMode,
  circle,
  opacity,
  bgColor,
  withBorder,
  flex,
  useFastImage,
  noImage,
  children,
  onLayout,
  isPlaceHolder,
  placeHolderRadius,
  onLoadEnd,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const _style = {
    width: flex ? '100%' : size || width,
    height: flex ? '100%' : size || height,
    borderRadius: circle ? size * 0.5 : radius,
    opacity,
    overflow: 'hidden',
  };
  const _wrapperStyle = {
    overflow: 'hidden',
    width: flex ? '100%' : (size || width) + withBorder * 2,
    height: flex ? '100%' : (size || height) + withBorder * 2,
    borderRadius: (circle ? size * 0.5 : radius) + withBorder * 2,
    backgroundColor: colors[bgColor],
    padding: withBorder,
  };
  const passProps = {
    resizeMode,
    source: src || null,
    defaultSource: defaultSrc,
    loadingIndicatorSource: loadingSrc,
    blurRadius,
    style: _style,
  };
  return (
    <View style={[_wrapperStyle, style]} onLayout={onLayout}>
      {(noImage && null) ||
        (useFastImage ? (
          <FastImage
            onLoadEnd={() => {
              setIsLoaded(true);
              if (onLoadEnd) {
                onLoadEnd();
              }
            }}
            onError={() => {
              setIsLoaded(true);
              if (onError) {
                onError();
              }
            }}
            {...passProps}>
            {!isLoaded && isPlaceHolder ? (
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={'100%'}
                  height={'100%'}
                  borderRadius={placeHolderRadius || 0}
                />
              </SkeletonPlaceholder>
            ) : null}
          </FastImage>
        ) : (
          <Image {...passProps} />
        ))}
      {children}
    </View>
  );
};

Avatar.defaultProps = {
  size: 44,
  height: 44,
  width: 44,
  radius: 22,
  src: null,
  defaultSrc: null,
  loadingSrc: null,
  blurRadius: 0,
  resizeMode: 'cover',
  circle: true,
  opacity: 1,
  bgColor: 'white',
  withBorder: 0,
  flex: false,
  priority: FastImage.priority.normal,
  useFastImage: Platform.OS === 'ios',
  noImage: false,
};

export default Avatar;
