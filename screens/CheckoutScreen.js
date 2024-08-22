import { MaterialIcons } from '@expo/vector-icons';
import AppButton from 'components/AppButton';
import ScreenComponent from 'components/ScreenComponent';
import Typo from 'components/Typo';
import colors from 'config/colors';
import { height, radius, spacingX, spacingY } from 'config/spacing';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { normalizeX, normalizeY } from 'utils/normalize';

function CheckoutScreen({ navigation }) {
  const [selectedMethod, setSelectedMethod] = useState('Credit Card');
  const [selectedAddress, setSelectedAddress] = useState('Home');
  return (
    <ScreenComponent style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBg} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios-new" size={18} color="black" />
        </TouchableOpacity>
        <Typo size={22} style={styles.headerTitle}>
          Checkout
        </Typo>
        <View style={{ width: normalizeX(35) }} />
      </View>
      <ScrollView style={{ flex: 1, padding: spacingX._20 }}>
        <Typo size={18} style={{ fontWeight: '600', marginBottom: spacingY._15 }}>
          Shipping to
        </Typo>
        <AddressCard selected={selectedAddress} setSelected={setSelectedAddress} title={'Home'} />
        <AddressCard selected={selectedAddress} setSelected={setSelectedAddress} title={'Office'} />

        <Typo size={18} style={{ fontWeight: '600' }}>
          Payment method
        </Typo>
        <MethodRow
          title={'Credit Card'}
          selected={selectedMethod}
          setSelected={setSelectedMethod}
        />
        <MethodRow title={'PayPal'} selected={selectedMethod} setSelected={setSelectedMethod} />
        <MethodRow title={'Google Pay'} selected={selectedMethod} setSelected={setSelectedMethod} />
        <MethodRow title={'Apple Pay'} selected={selectedMethod} setSelected={setSelectedMethod} />
      </ScrollView>

      <View style={styles.checkoutContainer}>
        <Row title={'Shipping fee'} price={'$30'} />
        <View style={styles.separator} />
        <Row title={'Subtotal'} price={'$245.00'} />
        <View style={styles.separator} />
        <Row title={'Total'} price={'$245.00'} />
        <AppButton label={'Payment'} />
      </View>
    </ScreenComponent>
  );
}

const Row = ({ title, price }) => {
  return (
    <View style={styles.row}>
      <Typo
        size={15}
        style={{ color: title == 'Total' ? colors.black : colors.gray, fontWeight: '500' }}>
        {title}
      </Typo>
      <Typo size={18} style={{ fontWeight: '600' }}>
        {price}
      </Typo>
    </View>
  );
};

const MethodRow = ({ title, selected, setSelected }) => {
  const isSelected = selected == title;
  return (
    <TouchableOpacity style={styles.row} onPress={() => setSelected(title)}>
      <Typo size={15} style={{ color: colors.black, fontWeight: '500', flex: 1 }}>
        {title}
      </Typo>
      <View>
        <View
          style={[
            styles.dotRadius,
            { borderColor: isSelected ? colors.primary : colors.lightGray },
          ]}>
          {isSelected && <View style={styles.dot} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const AddressCard = ({ title, selected, setSelected }) => {
  const isSelected = selected == title;
  return (
    <TouchableOpacity
      style={isSelected ? styles.selectedCard : styles.unSelectedCard}
      onPress={() => setSelected(title)}>
      <View
        style={[styles.dotRadius, { borderColor: isSelected ? colors.primary : colors.lightGray }]}>
        {isSelected && <View style={styles.dot} />}
      </View>
      <View style={{ flex: 1, gap: spacingY._5 }}>
        <Typo size={16} style={{ fontWeight: '500' }}>
          {title}
        </Typo>
        <Typo size={12} style={{ color: colors.gray }}>
          {title == 'Home' ? '(319) 555-0115' : '(207) 555-0119'}
        </Typo>
        <Typo size={12} style={{ color: colors.gray }}>
          {title == 'Home' ? '482 W Dallas St undefined' : '1749 Wheeler Ridge'}
        </Typo>
      </View>
      <MaterialIcons name="mode-edit" size={20} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grayBG',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacingX._20,
    justifyContent: 'space-between',
  },
  iconBg: {
    backgroundColor: colors.white,
    padding: spacingY._10,
    borderRadius: radius._20,
  },
  headerTitle: {
    fontWeight: 'bold',
    marginBottom: spacingY._10,
    alignSelf: 'center',
  },
  checkoutContainer: {
    borderTopLeftRadius: radius._20,
    borderTopRightRadius: radius._20,
    shadowColor: colors.black,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.2,
    backgroundColor: colors.white,
    paddingTop: spacingY._20,
    paddingHorizontal: spacingX._20,
    paddingBottom: spacingY._20,
  },
  row: {
    height: height.input,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.grayBG,
    alignItems: 'center',
  },
  separator: {
    height: normalizeY(2),
    width: '100%',
    backgroundColor: colors.grayBG,
  },
  dotRadius: {
    borderWidth: normalizeY(2),
    borderRadius: radius._20,
    borderColor: colors.primary,
    height: normalizeY(20),
    width: normalizeY(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: normalizeY(11),
    width: normalizeY(11),
    borderRadius: radius._10,
    backgroundColor: colors.primary,
  },
  selectedCard: {
    backgroundColor: colors.white,
    gap: spacingX._10,
    flexDirection: 'row',
    padding: spacingY._15,
    borderRadius: radius._20,
    marginBottom: spacingY._20,
    shadowColor: colors.black,
    shadowOffset: { height: 20, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  unSelectedCard: {
    backgroundColor: colors.lighterGray,
    gap: spacingX._10,
    flexDirection: 'row',
    padding: spacingY._15,
    borderRadius: radius._20,
    marginBottom: spacingY._20,
  },
});
export default CheckoutScreen;
