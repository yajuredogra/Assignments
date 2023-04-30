import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';

const PAGE_WIDTH = Dimensions.get('window').width;
const baseOptions = {
  vertical: false,
  width: PAGE_WIDTH * 0.85,
  height: PAGE_WIDTH / 3,
} as const;

export default function HomeScreenSection1() {
  const data = [...new Array(6).keys()];
  const ref = React.useRef<ICarouselInstance>(null);
  return (
    <View>
      <Carousel
        {...baseOptions}
        loop={false}
        ref={ref}
        style={{width: '100%'}}
        autoPlay={false}
        autoPlayInterval={2000}
        data={data}
        pagingEnabled={true}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View
            style={{
              borderWidth: 0.5,
              borderRadius: 8,
              flex: 1,
              alignItems: 'center',
              marginLeft: '2.5%',
              flexDirection: 'row',
            }}>
            <Image
              style={{
                maxHeight: baseOptions.height - 52,
                maxWidth: baseOptions.height - 52,
                margin: 12,
              }}
              resizeMode="contain"
              source={require('../assets/meditation.png')}
            />
            <View style={{flex: 1, marginHorizontal: 12}}>
              <Text style={{fontSize: 22}}>Name of session here</Text>
              <Text style={{fontSize: 12, color: '#b3b3b3'}}>
                Data time of session
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
