import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import HomeCard from 'components/HomeCard';
import ImageSlideShow from 'components/ImageSlideShow';
import ScreenComponent from 'components/ScreenComponent';
import SearchBar from 'components/SearchBar';
import Typo from 'components/Typo';
import colors from 'config/colors';
import { radius, spacingX, spacingY } from 'config/spacing';
import React from 'react';
import { View, StyleSheet, FlatList, Dimensions, ScrollView, Image } from 'react-native';
import { cartData, categories } from 'utils/data';
import { normalizeX, normalizeY } from 'utils/normalize';

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
      <ScrollView
        contentContainerStyle={{ paddingBottom: spacingY._60 }}
        showsVerticalScrollIndicator={false}>
        <ImageSlideShow />

        <FlatList
          data={[...categories, ...categories]}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.catContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.catCircle}>
                <Image source={{ uri: item.url }} style={styles.catImg} />
                <Typo size={12} style={styles.catName}>
                  {item.name}
                </Typo>
              </View>
            );
          }}
        />
        <View style={styles.headingContainer}>
          <Typo size={18} style={{ fontWeight: '600' }}>
            Special For You
          </Typo>
          <Typo style={{ color: colors.gray }}>See all</Typo>
        </View>
        <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }}>
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={cartData}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              gap: spacingX._20,
              paddingHorizontal: spacingX._20,
            }}
            columnWrapperStyle={{ gap: spacingX._20 }}
            renderItem={({ item }) => {
              return <HomeCard item={item} />;
            }}
          />
        </ScrollView>
      </ScrollView>
    </ScreenComponent>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: spacingY._20,
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
  catContainer: {
    paddingHorizontal: spacingX._20,
    marginTop: spacingY._10,
  },
  catCircle: {
    alignItems: 'center',
    gap: spacingY._5,
    width: normalizeX(75),
  },
  catImg: {
    height: normalizeY(60),
    width: normalizeY(60),
    borderRadius: radius._30,
    backgroundColor: 'pink',
  },
  catName: {
    textAlign: 'center',
    fontWeight: '500',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacingY._15,
    marginTop: spacingY._20,
    marginHorizontal: spacingX._15,
  },
});

export default HomeScreen;
