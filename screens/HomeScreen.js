import { Entypo, Ionicons } from '@expo/vector-icons';
import ImageSlideShow from 'components/ImageSlideShow';
import ScreenComponent from 'components/ScreenComponent';
import SearchBar from 'components/SearchBar';
import colors from 'config/colors';
import { radius, spacingX, spacingY } from 'config/spacing';
import React from 'react';
import { View, StyleSheet } from 'react-native';

function HomeScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconBg}>
          <Entypo name="grid" size={24} color="black" />
        </View>
        <View style={styles.iconBg}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>

      <SearchBar />
      <ImageSlideShow />
    </ScreenComponent>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: spacingY._60,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: spacingX._20,
    padding: spacingY._10,
    justifyContent: 'space-between',
  },
  iconBg: {
    backgroundColor: colors.lighterGray,
    padding: spacingY._7,
    borderRadius: radius._20,
  },
});

export default HomeScreen;
