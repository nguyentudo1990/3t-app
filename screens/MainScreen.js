import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Box, Text } from 'theme';
import HomeScreen from './HomeScreen';
import FavouritesScreen from './FavouritesScreen';
import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import AppIcon from 'components/AppIcon';

function MainScreen(props) {
  const [selected, setSelected] = useState('Cart');
  return (
    <Box flex={1}>
      <Box flex={1} backgroundColor="white">
        {selected == 'Menu' ? (
          <MenuScreen />
        ) : selected == 'Favourites' ? (
          <FavouritesScreen />
        ) : selected == 'Home' ? (
          <HomeScreen />
        ) : selected == 'Cart' ? (
          <CartScreen />
        ) : selected == 'Profile' ? (
          <ProfileScreen />
        ) : null}
      </Box>
      <Box
        height={'10%'}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly"
        backgroundColor="purple">
        <AppIcon iconStyle={{ backgroundColor: 'red' }} onPress={() => setSelected('Menu')} />
        <AppIcon iconStyle={{ backgroundColor: 'red' }} onPress={() => setSelected('Favourites')} />
        <AppIcon iconStyle={{ backgroundColor: 'red' }} onPress={() => setSelected('Home')} />
        <AppIcon iconStyle={{ backgroundColor: 'red' }} onPress={() => setSelected('Cart')} />
        <AppIcon iconStyle={{ backgroundColor: 'red' }} onPress={() => setSelected('Profile')} />
      </Box>
    </Box>
  );
}
const styles = StyleSheet.create({});

export default MainScreen;
