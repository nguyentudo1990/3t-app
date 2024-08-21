import React, { useRef } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import { notifications } from 'utils/data';
import ScreenComponent from 'components/ScreenComponent';
import { radius, spacingX, spacingY } from 'config/spacing';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Typo from 'components/Typo';
import { normalizeY } from 'utils/normalize';

function NotificationsScreen({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const SPACING = spacingY._20;
  const CARD_HEIGHT = normalizeY(55);
  const ITEM_SIZE = CARD_HEIGHT + SPACING * 3;
  const iconSize = normalizeY(18);

  return (
    <ScreenComponent style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBg} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios-new" size={iconSize} color="black" />
        </TouchableOpacity>
        <Typo size={20} style={styles.headerTxt}>
          Notifications
        </Typo>
      </View>
      <Animated.FlatList
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
        })}
        showsVerticalScrollIndicator={false}
        data={notifications}
        contentContainerStyle={{
          padding: SPACING,
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const isEven = index % 2 == 0;
          return (
            <Animated.View
              style={[
                styles.notiView,
                {
                  backgroundColor: isEven ? colors.light : colors.grayBG,
                  marginBottom: SPACING,
                  padding: SPACING,
                  transform: [{ scale }],
                  opacity,
                },
              ]}>
              <View style={{ height: CARD_HEIGHT }} />
              <View
                style={{ flex: 1, justifyContent: 'space-between', marginVertical: -spacingY._10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacingX._10 }}>
                  <View
                    style={[
                      styles.dot,
                      {
                        backgroundColor: isEven ? colors.primary : colors.lightGray,
                      },
                    ]}
                  />
                  <Typo size={16} style={{ fontWeight: '600' }}>
                    {item.title}
                  </Typo>
                </View>

                <Typo numberOfLines={2} style={{ color: colors.gray }}>
                  {item.body}
                </Typo>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: spacingX._5,
                  }}>
                  <AntDesign name="clockcircle" size={14} color={colors.primary} />
                  <Typo style={styles.dateTxt}>{item.date}</Typo>
                </View>
              </View>
            </Animated.View>
          );
        }}
      />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  header: {
    alignItems: 'center',
    zIndex: 1,
    flexDirection: 'row',
    paddingHorizontal: spacingX._20,
    paddingVertical: spacingY._10,
    gap: spacingX._10,
    borderBottomWidth: 0.5,
    borderColor: colors.lighterGray,
  },
  iconBg: {
    backgroundColor: colors.lighterGray,
    padding: spacingY._10,
    borderRadius: radius._20,
  },
  headerTxt: {
    fontWeight: '700',
  },
  notiView: {
    flexDirection: 'row',
    borderRadius: radius._15,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
  },
  dateTxt: {
    opacity: 0.8,
    color: colors.primary,
    alignSelf: 'flex-end',
    fontWeight: '500',
  },
  dot: {
    height: normalizeY(10),
    width: normalizeY(10),
    borderRadius: radius._10,
  },
});
export default NotificationsScreen;
