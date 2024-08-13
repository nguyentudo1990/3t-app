import CartCard from 'components/CartCard';
import FavouriteCard from 'components/FavouriteCard';
import ScreenComponent from 'components/ScreenComponent';
import Typo from 'components/Typo';
import { spacingX, spacingY } from 'config/spacing';
import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { cartData } from 'utils/data';

function FavouritesScreen(props) {
  return (
    <ScreenComponent>
      <Typo style={styles.headerTitle} size={22}>
        Favourites
      </Typo>
      <FlatList
        data={cartData}
        style={{ flex: 1 }}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
          return <FavouriteCard item={item} />;
        }}
      />
    </ScreenComponent>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: 'bold',
    paddingVertical: spacingY._10,
    alignSelf: 'center',
  },
  listContainer: {
    paddingHorizontal: spacingX._20,
    paddingTop: spacingY._10,
    paddingBottom: '30%',
  },
});

export default FavouritesScreen;
