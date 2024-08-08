import AppButton from 'components/AppButton';
import CartCard from 'components/CartCard';
import ScreenComponent from 'components/ScreenComponent';
import Typo from 'components/Typo';
import colors from 'config/colors';
import { height, radius, spacingX, spacingY } from 'config/spacing';
import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { cartData } from 'utils/data';
import { normalizeX, normalizeY } from 'utils/normalize';

function CartScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <Text style={styles.headerTitle}>My Cart</Text>
      <FlatList
        data={cartData}
        style={{ flex: 1 }}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
          return <CartCard item={item} />;
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          backgroundColor: colors.white,
          borderTopRightRadius: radius._20,
          borderTopLeftRadius: radius._20,
        }}>
        <View style={styles.checkoutContainer}>
          <View style={styles.discountRow}>
            <TextInput style={styles.input} placeholder="Enter Discount Code" />
            <Text style={styles.applyText}>Apply</Text>
          </View>
          <Row title={'Subtotal'} price={'$245.00'} />
          <View style={styles.separator} />
          <Row title={'Total'} price={'$245.00'} />
          <AppButton label={'Checkout'} />
        </View>
      </KeyboardAvoidingView>
      <View style={{ height: '12%', backgroundColor: colors.white }} />
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grayBG',
    paddingBottom: spacingY._20,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: normalizeY(22),
    paddingVertical: spacingY._10,
    alignSelf: 'center',
  },
  listContainer: {
    paddingHorizontal: spacingX._20,
    paddingTop: spacingY._20,
  },
  discountRow: {
    height: height.input,
    backgroundColor: colors.grayBG,
    width: '100%',
    borderRadius: radius._30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalizeX(15),
    alignItems: 'center',
  },
  input: {
    fontSize: normalizeY(16),
    flex: 1,
    paddingRight: spacingX._10,
  },
  applyText: {
    fontSize: normalizeY(18),
    color: colors.primary,
    fontWeight: '600',
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
    paddingBottom: spacingY._10,
  },
  row: {
    height: height.btn,
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
});
export default CartScreen;
