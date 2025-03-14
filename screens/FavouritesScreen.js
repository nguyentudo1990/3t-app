// import { useFocusEffect } from '@react-navigation/native';
// import FavouriteCard from 'components/FavouriteCard';
// import ScreenComponent from 'components/ScreenComponent';
// import Typo from 'components/Typo';
// import { spacingX, spacingY } from 'config/spacing';
// import React, { useCallback, useState } from 'react';
// import { StyleSheet } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import Animated, { FadeInDown } from 'react-native-reanimated';
// import { products } from 'utils/data';

// function FavouritesScreen(props) {
//   const [key, setKey] = useState(0);

//   useFocusEffect(
//     useCallback(() => {
//       setKey((prevKey) => prevKey + 1);
//     }, [])
//   );
//   return (
//     <ScreenComponent>
//       <Typo style={styles.headerTitle} size={22}>
//         History
//       </Typo>
//       <FlatList
//         data={products}
//         style={{ flex: 1 }}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={styles.listContainer}
//         renderItem={({ item, index }) => {
//           return (
//             <Animated.View
//               key={`${key}-${index}`}
//               entering={FadeInDown.delay(index * 140)
//                 .duration(2000)
//                 .damping(12)
//                 .springify()}>
//               <FavouriteCard item={item} />
//             </Animated.View>
//           );
//         }}
//       />
//     </ScreenComponent>
//   );
// }
// const styles = StyleSheet.create({
//   headerTitle: {
//     fontWeight: 'bold',
//     paddingVertical: spacingY._5,
//     alignSelf: 'center',
//   },
//   listContainer: {
//     paddingHorizontal: spacingX._20,
//     paddingTop: spacingY._10,
//     paddingBottom: '30%',
//   },
// });

// export default FavouritesScreen;

import React from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Header from 'components/Header';

const orders = [
  { id: "1", name: "Đơn 1", items: 3, price: "1.000.000", address: "123 Phan Văn Trị" },
  { id: "2", name: "Đơn 2", items: 4, price: "2.000.000", address: "123 Phan Văn Trị" },
  { id: "3", name: "Đơn 3", items: 2, price: "1.000.000", address: "123 Phan Văn Trị" },
];

const FavouritesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header label={'Lịch sử đặt hàng'} />

      {/* Bộ lọc ngày */}
      <View style={styles.dateFilter}>
        <Text style={styles.dateText}>Từ ngày - Đến ngày</Text>
      </View>

      {/* Danh sách đơn hàng */}
      <Text style={styles.sectionTitle}>Các đơn đã đặt</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text style={styles.orderTitle}>{item.name} ({item.items} sản phẩm)</Text>
            <Text style={styles.orderPrice}>{item.price}</Text>
            <Text style={styles.orderAddress}>{item.address}</Text>
            <TouchableOpacity style={styles.detailButton}>
              <Text style={styles.detailText}>Chi tiết</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'grayBG',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
  },
  menuIcon: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  dateFilter: {
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  orderCard: {
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  orderPrice: {
    fontSize: 16,
  },
  orderAddress: {
    fontSize: 14,
  },
  detailButton: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
  detailText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default FavouritesScreen;

