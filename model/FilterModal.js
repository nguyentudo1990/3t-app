import { AntDesign, Entypo } from '@expo/vector-icons';
import { Slider } from '@miblanchard/react-native-slider';
import Typo from 'components/Typo';
import colors from 'config/colors';
import { radius, spacingX, spacingY } from 'config/spacing';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import { BRANDS, CATEGORIES, COLORS, STYLES, SIZES } from 'utils/data';
import { normalizeY } from 'utils/normalize';
const { height } = Dimensions.get('screen');

function FilterModal({ visible, setVisible }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(1000);

  const handleSelectCategories = (name) => {
    if (selectedCategories.includes(name)) {
      const filtered = selectedCategories.filter((item) => item !== name);
      setSelectedCategories(filtered);
    } else {
      setSelectedCategories([...selectedCategories, name]);
    }
  };
  const handleSelectStyles = (name) => {
    if (selectedStyles.includes(name)) {
      const filtered = selectedStyles.filter((item) => item !== name);
      setSelectedStyles(filtered);
    } else {
      setSelectedStyles([...selectedStyles, name]);
    }
  };
  const handleSelectBrands = (name) => {
    if (selectedBrands.includes(name)) {
      const filtered = selectedBrands.filter((item) => item !== name);
      setSelectedBrands(filtered);
    } else {
      setSelectedBrands([...selectedBrands, name]);
    }
  };
  const handleSelectSizes = (name) => {
    if (selectedSizes.includes(name)) {
      const filtered = selectedSizes.filter((item) => item !== name);
      setSelectedSizes(filtered);
    } else {
      setSelectedSizes([...selectedSizes, name]);
    }
  };
  const handleSelectColors = (name) => {
    if (selectedColors.includes(name)) {
      const filtered = selectedColors.filter((item) => item !== name);
      setSelectedColors(filtered);
    } else {
      setSelectedColors([...selectedColors, name]);
    }
  };

  return (
    <>
      <Modal transparent visible={visible} animationType="slide">
        <TouchableOpacity
          onPress={() => setVisible(false)}
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            height: height * 0.2,
          }}
        />
        <View activeOpacity={1} style={styles.container}>
          <TouchableOpacity style={styles.crossIcon} onPress={() => setVisible(false)}>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
          <ScrollView
            contentContainerStyle={{ paddingBottom: '15%' }}
            showsVerticalScrollIndicator={false}>
            <Heading title={'Category'} />
            <ScrollView horizontal>
              <FlatList
                scrollEnabled={false}
                data={CATEGORIES}
                numColumns={3}
                contentContainerStyle={{ gap: spacingY._10 }}
                columnWrapperStyle={{ gap: spacingX._10 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.listItem}
                      onPress={() => handleSelectCategories(item)}>
                      {selectedCategories.includes(item) ? (
                        <AntDesign name="checkcircle" size={18} color={colors.primary} />
                      ) : (
                        <View style={styles.circle} />
                      )}
                      <Typo>{item}</Typo>
                    </TouchableOpacity>
                  );
                }}
              />
            </ScrollView>
            <Heading title={'Style'} />
            <ScrollView horizontal>
              <FlatList
                scrollEnabled={false}
                data={STYLES}
                numColumns={3}
                contentContainerStyle={{ gap: spacingY._10 }}
                columnWrapperStyle={{ gap: spacingX._10 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.listItem}
                      onPress={() => handleSelectStyles(item)}>
                      {selectedStyles.includes(item) ? (
                        <AntDesign name="checkcircle" size={18} color={colors.primary} />
                      ) : (
                        <View style={styles.circle} />
                      )}
                      <Typo>{item}</Typo>
                    </TouchableOpacity>
                  );
                }}
              />
            </ScrollView>
            <Heading title={'Brand'} />
            <ScrollView horizontal>
              <FlatList
                scrollEnabled={false}
                data={BRANDS}
                numColumns={3}
                contentContainerStyle={{ gap: spacingY._10 }}
                columnWrapperStyle={{ gap: spacingX._10 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.listItem}
                      onPress={() => handleSelectBrands(item)}>
                      {selectedBrands.includes(item) ? (
                        <AntDesign name="checkcircle" size={18} color={colors.primary} />
                      ) : (
                        <View style={styles.circle} />
                      )}
                      <Typo>{item}</Typo>
                    </TouchableOpacity>
                  );
                }}
              />
            </ScrollView>
            <Heading title={'Color'} />
            <ScrollView horizontal>
              <FlatList
                scrollEnabled={false}
                data={COLORS}
                numColumns={4}
                contentContainerStyle={{ gap: spacingY._10 }}
                columnWrapperStyle={{ gap: spacingX._10 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  const isInclude = selectedColors.includes(item);
                  return (
                    <TouchableOpacity
                      style={[
                        styles.listItem,
                        {
                          borderColor: isInclude ? colors.blue : colors.lightGray,
                          borderWidth: isInclude ? 2 : 1,
                          margin: isInclude ? 0 : 1,
                        },
                      ]}
                      onPress={() => handleSelectColors(item)}>
                      <View
                        style={[
                          styles.circle,
                          { backgroundColor: item.toLowerCase(), borderWidth: 0 },
                        ]}
                      />
                      <Typo>{item}</Typo>
                    </TouchableOpacity>
                  );
                }}
              />
            </ScrollView>
            <Heading title={'Size'} />
            <ScrollView horizontal>
              <FlatList
                scrollEnabled={false}
                data={SIZES}
                numColumns={4}
                contentContainerStyle={{ gap: spacingY._10 }}
                columnWrapperStyle={{ gap: spacingX._10 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.listItem}
                      onPress={() => handleSelectSizes(item)}>
                      {selectedSizes.includes(item) ? (
                        <AntDesign name="checkcircle" size={18} color={colors.primary} />
                      ) : (
                        <View style={styles.circle} />
                      )}
                      <Typo>{item}</Typo>
                    </TouchableOpacity>
                  );
                }}
              />
            </ScrollView>
            <Heading title={'Price Range'} />
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typo>${low}</Typo>
                <Typo>${high}</Typo>
              </View>
            </View>
            <Slider
              minimumTrackTintColor={colors.themeColor}
              maximumTrackTintColor={colors.lightGray}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor={colors.themeColor}
              trackStyle={{ backgroundColor: colors.lightGray }}
              value={[low, high]}
              onValueChange={([low, high]) => {
                console.log(parseInt(low), parseInt(high));
                setLow(parseInt(low));
                setHigh(parseInt(high));
              }}
            />
            <View style={styles.resultsView}>
              <Typo size={12} style={{ color: colors.white }}>
                Show 32 Results
              </Typo>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}

const Heading = ({ title }) => {
  return (
    <>
      <Typo size={16} style={styles.heading}>
        {title}
      </Typo>
      <View style={styles.line} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: radius._20,
    borderTopLeftRadius: radius._20,
    marginTop: -spacingY._20,
    paddingHorizontal: spacingX._20,
  },
  heading: {
    fontWeight: '700',
    marginTop: spacingY._15,
  },
  crossIcon: {
    backgroundColor: colors.lighterGray,
    alignSelf: 'flex-end',
    borderRadius: radius._20,
    padding: spacingY._5,
    marginTop: spacingY._10,
    marginBottom: spacingY._5,
    marginEnd: -spacingX._10,
  },
  line: {
    height: normalizeY(1),
    backgroundColor: colors.lightGray,
    marginVertical: spacingY._10,
  },
  circle: {
    height: normalizeY(17),
    width: normalizeY(17),
    borderRadius: radius._10,
    borderWidth: normalizeY(1),
    borderColor: colors.lightGray,
  },
  listItem: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: spacingY._5,
    borderRadius: spacingY._20,
    gap: spacingX._5,
    borderColor: colors.lightGray,
  },
  resultsView: {
    backgroundColor: colors.primary,
    padding: spacingY._15,
    paddingVertical: spacingY._7,
    marginTop: spacingY._10,
    borderRadius: radius._20,
    alignSelf: 'flex-start',
  },
});

export default FilterModal;
