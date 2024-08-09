import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from 'config/colors';
import { height, radius, spacingY } from 'config/spacing';
import Typo from './Typo';

function AppButton({ label, style }) {
  return (
    <TouchableOpacity style={[styles.button, { ...style }]}>
      <Typo style={{ color: colors.white }} size={18}>
        {label}
      </Typo>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: height.btn,
    backgroundColor: colors.primary,
    width: '100%',
    marginTop: spacingY._15,
    borderRadius: radius._30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AppButton;
