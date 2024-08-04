import { Platform, View, Dimensions } from 'react-native';
import React from 'react';
import { Box } from 'theme';

const { height } = Dimensions.get('window');

export default function ScreenComponent({ style, children }) {
  let paddingTop = Platform.OS === 'ios' ? height * 0.05 : 10;

  return (
    <Box style={[{ paddingTop }, { ...style }]} flex={1}>
      {children}
    </Box>
  );
}
