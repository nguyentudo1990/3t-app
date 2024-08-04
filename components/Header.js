import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { normalizeY } from '../utils/normalize';
import Typo from './Typo';
import { useNavigation } from '@react-navigation/native';
import fonts from '../assets/fonts';

function Header({ label }) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          // source={require('../assets/icons/backIcon.png')}
          style={{ height: normalizeY(20), width: normalizeY(20) }}
        />
      </TouchableOpacity>
      <Typo style={styles.headerText} size={16}>
        {label}
      </Typo>
      <View style={{ width: normalizeY(20) }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  headerText: {
    fontFamily: fonts.bold,
    alignSelf: 'center',
  },
});
export default Header;
