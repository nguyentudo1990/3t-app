import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import { sliderImages } from '../utils/data';
import { normalizeX, normalizeY } from '../utils/normalize';
import { radius, spacingX, spacingY } from 'config/spacing';

const { width: screenWidth, height } = Dimensions.get('window');
const adjustedWidth = screenWidth - normalizeX(40);

function ImageSlideShow(props) {
  const images = sliderImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * adjustedWidth,
        animated: true,
      });
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  const handleSlide = () => {};

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleSlide}
        onMomentumScrollEnd={(ev) => {
          const currentIndex = Math.floor(ev.nativeEvent.contentOffset.x / adjustedWidth);
          setCurrentIndex(currentIndex);
        }}
        scrollEventThrottle={16}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                width: index == currentIndex ? 15 : 8,
                backgroundColor: index === currentIndex ? colors.black : colors.transparent,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.2,
    width: adjustedWidth,
    borderRadius: radius._15,
    overflow: 'hidden',
    marginVertical: spacingY._15,
    alignSelf: 'center',
  },
  image: {
    resizeMode: 'cover',
    height: '100%',
    width: adjustedWidth,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: spacingY._10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: radius._6,
    marginHorizontal: spacingX._3,
    borderWidth: 1,
  },
});

export default ImageSlideShow;
