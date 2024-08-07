import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from 'config/colors';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Typo from './Typo';
import { normalizeX, normalizeY } from 'utils/normalize';
const { width } = Dimensions.get('screen');

function CartCard({ item }) {
  const imgSize = width * 0.3 - normalizeY(30);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.url }}
        resizeMode="contain"
        style={[
          styles.img,
          {
            width: imgSize,
            height: imgSize,
          },
        ]}
      />
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={styles.row}>
          <Typo size={17} style={{ fontWeight: 'bold' }}>
            {item.name}
          </Typo>
          <MaterialCommunityIcons
            name="delete-empty-outline"
            size={normalizeY(24)}
            color={colors.primary}
          />
        </View>
        <Typo style={styles.catText}>{item.category}</Typo>
        <View style={styles.row}>
          <Typo style={{ fontWeight: 'bold' }}>{item.price}</Typo>
          <View style={styles.countContanier}>
            <Typo style={{ fontWeight: 'bold' }}>-</Typo>
            <Typo style={{ fontWeight: 'bold' }}>1</Typo>
            <Typo style={{ fontWeight: 'bold' }}>+</Typo>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: normalizeY(15),
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.1,
    padding: normalizeY(15),
    borderRadius: normalizeY(12),
    gap: normalizeX(10),
  },
  img: {
    backgroundColor: colors.white,
    borderRadius: normalizeY(15),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  catText: {
    color: colors.lightGray,
    fontWeight: 'bold',
    marginBottom: normalizeY(3),
  },
  countContanier: {
    backgroundColor: colors.grayBG,
    width: '35%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: normalizeY(5),
    borderRadius: normalizeY(20),
  },
});

export default CartCard;
