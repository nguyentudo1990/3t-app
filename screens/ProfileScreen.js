import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import ScreenComponent from 'components/ScreenComponent';
import Typo from 'components/Typo';
import colors from 'config/colors';
import { spacingX, spacingY } from 'config/spacing';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function ProfileScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <View style={styles.topRow}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/handsome-smiling-man-looking-with-disbelief_176420-19591.jpg?t=st=1723641040~exp=1723644640~hmac=aef27975e23ff9df20ea1f41d340106576264a0d6c9400a220ad615579e1340b&w=740',
          }}
          style={styles.img}
        />
        <View style={{ gap: spacingY._7 }}>
          <Typo size={22} style={styles.name}>
            Jack Frost
          </Typo>
          <Typo>Fashion Model</Typo>
        </View>
      </View>

      <View style={styles.detailRow}>
        <Feather name="phone-call" size={20} color={colors.black} />
        <Typo>(581)-307-6902</Typo>
      </View>
      <View style={styles.detailRow}>
        <MaterialCommunityIcons name="email-outline" size={20} color={colors.black} />
        <Typo>jack.frost@gmail.com</Typo>
      </View>

      <View style={styles.walletRow}>
        <View style={styles.walletContainer}>
          <Typo size={18} style={styles.name}>
            $140.00
          </Typo>
          <Typo>Wallet</Typo>
        </View>
        <View style={styles.walletContainer}>
          <Typo size={18} style={styles.name}>
            12
          </Typo>
          <Typo>Orders</Typo>
        </View>
      </View>
      <Row
        title={'Your Favorites'}
        icon={<Feather name="heart" size={24} color={colors.primary} />}
      />
      <Row
        title={'Payment'}
        icon={<MaterialIcons name="payment" size={24} color={colors.primary} />}
      />
      <Row
        title={'Tell Your Friend'}
        icon={<AntDesign name="deleteusergroup" size={24} color={colors.primary} />}
      />
      <Row title={'Promotions'} icon={<AntDesign name="tago" size={24} color={colors.primary} />} />
      <Row title={'Settings'} icon={<Feather name="settings" size={24} color={colors.primary} />} />
      <View style={styles.line} />
      <Row title={'Log out'} icon={<AntDesign name="logout" size={24} color={colors.primary} />} />
    </ScreenComponent>
  );
}

const Row = ({ icon, title }) => {
  return (
    <View style={styles.row}>
      {icon}
      <Typo size={16} style={{ fontWeight: '500' }}>
        {title}
      </Typo>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacingX._20,
    backgroundColor: colors.white,
  },
  topRow: {
    flexDirection: 'row',
    paddingVertical: spacingY._15,
    alignItems: 'center',
    gap: spacingX._20,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  name: {
    fontWeight: '600',
    color: colors.primary,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingX._10,
    paddingVertical: spacingY._10,
  },
  walletRow: {
    flexDirection: 'row',
    width: '115%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.gray,
    alignSelf: 'center',
    marginVertical: spacingY._15,
  },
  walletContainer: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacingY._15,
    gap: spacingY._7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingX._10,
    paddingVertical: spacingY._15,
  },
  line: {
    height: 0.5,
    width: '115%',
    backgroundColor: colors.gray,
    alignSelf: 'center',
    marginVertical: spacingY._15,
  },
});

export default ProfileScreen;
