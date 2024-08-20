import { Entypo, Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import HomeCard from 'components/HomeCard';
import ImageSlideShow from 'components/ImageSlideShow';
import ScreenComponent from 'components/ScreenComponent';
import SearchBar from 'components/SearchBar';
import Typo from 'components/Typo';
import colors from 'config/colors';
import { radius, spacingX, spacingY } from 'config/spacing';
import FilterModal from 'model/FilterModal';
import React, { useCallback, useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { cartData, categories } from 'utils/data';
import { normalizeX, normalizeY } from 'utils/normalize';

function HomeScreen(props) {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [data, setData] = useState(cartData);
  const [key, setKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setKey((prevKey) => prevKey + 1);
    }, [])
  );

  const handleFilter = (category) => {
    if (category === 'All') {
      setData(cartData);
    } else {
      const filteredData = cartData.filter((item) => item.category === category);
      setData(filteredData);
    }
  };
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

      <SearchBar onPress={() => setFilterModalVisible(true)} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: spacingY._60 }}
        showsVerticalScrollIndicator={false}>
        <ImageSlideShow />

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.catContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                key={`${key}-${index}`}
                style={styles.catCircle}
                entering={FadeInRight.delay(index * 100)
                  .duration(500)
                  .damping(14)}>
                <TouchableOpacity onPress={() => handleFilter(item.name)}>
                  <Image source={{ uri: item.url }} style={styles.catImg} />
                  <Typo size={12} style={styles.catName}>
                    {item.name}
                  </Typo>
                </TouchableOpacity>
              </Animated.View>
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
            data={data}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              gap: spacingX._20,
              paddingHorizontal: spacingX._20,
            }}
            columnWrapperStyle={{ gap: spacingX._20 }}
            renderItem={({ item, index }) => {
              return (
                <Animated.View
                  key={`${key}-${index}`}
                  entering={FadeInDown.delay(index * 100)
                    .duration(500)
                    .damping(14)}>
                  <HomeCard item={item} />
                </Animated.View>
              );
            }}
          />
        </ScrollView>
      </ScrollView>
      <FilterModal visible={filterModalVisible} setVisible={setFilterModalVisible} />
    </ScreenComponent>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: spacingY._20,
    backgroundColor: colors.white,
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
