import React from 'react';
import {Text} from 'react-native';
import colors from '../../assets/colors';
import {normalize} from '../../styles/responsiveScreen';

const FontText = ({
  children,
  style,
  color,
  pureColor,
  size,
  lineHeightFactor,
  lines,
  opacity,
  pTop,
  pLeft,
  pRight,
  pBottom,
  textAlign,
  textDecoration,
  onLayout,
}) => {
  const fontSize = size;
  const textStyle = {
    fontSize,
    color: pureColor || colors[color],
    lineHeight: fontSize * lineHeightFactor,
    opacity,
    paddingTop: pTop,
    paddingLeft: pLeft,
    paddingRight: pRight,
    paddingBottom: pBottom,
    textAlign,
    textDecorationLine: textDecoration,
    textDecorationColor: textDecoration ? pureColor || colors[color] : null,
    textDecorationStyle: textDecoration ? 'solid' : null,
  };
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={lines}
      onLayout={onLayout}
      style={[textStyle, style]}>
      {children}
    </Text>
  );
};

FontText.defaultProps = {
  size: normalize(14),
  color: 'default',
  lineHeightFactor: 1.2,
  lines: 0,
  opacity: 1,
  textAlign: 'left',
  pTop: 0,
  pLeft: 0,
  pRight: 0,
  pBottom: 0,
  textDecoration: null,
};

export default FontText;
