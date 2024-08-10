import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Animated, StyleSheet, Dimensions } from 'react-native';
import Typo from './Typo';
import colors from 'config/colors';
import { radius, spacingX, spacingY } from 'config/spacing';
import { BlurView } from 'expo-blur';
const { width } = Dimensions.get('screen');
const containerWidth = width - 30;

function StartSelector({ selected, setSelected }) {
  const animatedValue = new Animated.Value(0);
  const [startRange, setStartRange] = useState(0);
  const [endRange, setEndRange] = useState(0);

  const handleSelect = (text) => {
    const range = text == 'Register' ? 0 : text == 'Sign in' ? containerWidth * 0.45 : 0;
    setStartRange(endRange);
    setEndRange(range);
    setSelected(text);
  };

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 6,
      useNativeDriver: false,
    }).start();
  }, [selected]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [startRange, endRange],
  });

  return (
    <BlurView style={styles.container} tint="extra-light">
      <Animated.View
        style={[
          styles.selectedView,
          {
            transform: [{ translateX }],
          },
        ]}
      />
      <TouchableOpacity style={styles.textContainer} onPress={() => handleSelect('Register')}>
        <Typo size={16} numberOfLines={1} adjustsFontSizeToFit style={{ fontWeight: '500' }}>
          Register
        </Typo>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={() => handleSelect('Sign in')}>
        <Typo size={16} numberOfLines={1} adjustsFontSizeToFit style={{ fontWeight: '500' }}>
          Sign in
        </Typo>
      </TouchableOpacity>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  selectedView: {
    backgroundColor: colors.white,
    width: containerWidth / 2 - spacingX._10,
    height: '100%',
    position: 'absolute',
    borderRadius: 10,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: radius._12,
    overflow: 'hidden',
    backgroundColor: colors.lightprimary,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    width: '90%',
  },
  textContainer: {
    flex: 1,
    paddingVertical: spacingY._15,
    alignItems: 'center',
  },
});

export default StartSelector;
