import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
const PAGE_WIDTH = Dimensions.get('window').width;
const flatListItemWidth = PAGE_WIDTH / 3;
const colors = ['#DEDEA7', '#A4D0A4', '#F7E1AE', '#E3F2C1'];

export default function HomeScreenSection2(props: any) {
  return (
    <View style={{flex: 1, flexDirection: 'column', margin: 12}}>
      <Text
        style={{
          flex: 1,
          fontSize: 16,
          marginVertical: 12,
        }}>
        {props?.headerName}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={props?.data}
        style={{}}
        renderItem={item => (
          <TouchableWithoutFeedback onPress={() => props.actionListener()}>
            <View
              style={{
                marginHorizontal: 6,
                width: flatListItemWidth,
                height: PAGE_WIDTH / 2,
                borderRadius: 12,
                backgroundColor: colors[item.index],
                padding: 12,
              }}>
              <Image
                style={{
                  height: 24,
                  width: 24,
                }}
                source={require('../assets/arm_muscle.png')}
              />
              <View
                style={{
                  alignSelf: 'baseline',
                  position: 'absolute',
                  bottom: 0,
                  margin: 12,
                }}>
                <Text style={{fontSize: 14, marginVertical: 6}}>
                  Routine Name
                </Text>
                <Text
                  style={{fontSize: 10, color: '#808080', marginVertical: 6}}>
                  Routine Util
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={index => index}
        horizontal
      />
    </View>
  );
}
