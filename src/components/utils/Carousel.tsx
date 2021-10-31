import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import { themeColor, useTheme } from 'react-native-rapi-ui';
import SimplePaginationDot from './SimplePaginationDot';

const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    uri: 'https://i.imgur.com/GImvG4q.jpg',
    title: 'Lorem ipsum dolor sit amet',
    discount: '50%'
  },
  {
    uri: 'https://i.imgur.com/Pz2WYAc.jpg',
    title: 'Lorem ipsum ',
    discount: '20%'
  },
  {
    uri: 'https://i.imgur.com/IGRuEAa.jpg',
    title: 'Lorem ipsum dolor',
    discount: '10%'
  },
  {
    uri: 'https://i.imgur.com/fRGHItn.jpg',
    title: 'Lorem ipsum dolor',
    discount: '15%'
  },
  {
    uri: 'https://i.imgur.com/WmenvXr.jpg',
    title: 'Lorem ipsum ',
    discount: '60%'
  },
];

const INITIAL_INDEX = 0;
export default function (props: any) {
  const carouselRef = useRef(null);
  const { isDarkmode, setTheme } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item: any, index: React.SetStateAction<number>) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}): JSX.Element {

    const {uri, title, discount} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef?.current.scrollToIndex(index);
        }}>
        <ImageBackground source={{uri: uri}} style={styles.imageBackground}>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>{discount}</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>{title}</Text>
          </View>
        </ImageBackground>
        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{
        backgroundColor: isDarkmode? themeColor.black : themeColor.white100, 
        paddingVertical: 20
    }}>
      <Carousel
        style={[styles.carousel, {
            backgroundColor: isDarkmode? themeColor.black : themeColor.white100, 
        }]}
        data={data}
        renderItem={renderItem}
        itemWidth={0.7 * windowWidth}
        inActiveOpacity={0.3}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
      <SimplePaginationDot currentIndex={currentIndex || 0} length={data.length} />
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    aspectRatio: 1.5,
    flexGrow: 0,
    marginBottom: 20
  },
  item: {
    borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    borderColor: 'white',
    elevation: 3,
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white',
  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    backgroundColor: themeColor.dangerTransparent,
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightText: {color: 'white'},
  lowerContainer: {
    flex: 1,
    margin: 10,
  },
  bottomTextContainer:{
    marginLeft: -2,
    marginRight: 'auto',
    paddingLeft: 10,
    paddingTop:100,
    marginBottom: 3,
    textAlignVertical: "center"
  },
  bottomText: {
    fontWeight: 'bold',
    fontSize: 15
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentText: {
    marginTop: 10,
    fontSize: 12,
  },
});