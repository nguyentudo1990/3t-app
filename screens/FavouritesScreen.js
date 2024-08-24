import { useFocusEffect } from '@react-navigation/native';
import FavouriteCard from 'components/FavouriteCard';
import ScreenComponent from 'components/ScreenComponent';
import Typo from 'components/Typo';
import { spacingX, spacingY } from 'config/spacing';
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { cartData } from 'utils/data';

function FavouritesScreen(props) {
  const [key, setKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setKey((prevKey) => prevKey + 1);
    }, [])
  );
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
        renderItem={({ item, index }) => {
          return (
            <Animated.View
              key={`${key}-${index}`}
              entering={FadeInDown.delay(index * 100)
                .duration(500)
                .damping(14)}>
              <FavouriteCard item={item} />
            </Animated.View>
          );
        }}
      />
    </ScreenComponent>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: 'bold',
    paddingVertical: spacingY._5,
    alignSelf: 'center',
  },
  listContainer: {
    paddingHorizontal: spacingX._20,
    paddingTop: spacingY._10,
    paddingBottom: '30%',
  },
});

export default FavouritesScreen;
