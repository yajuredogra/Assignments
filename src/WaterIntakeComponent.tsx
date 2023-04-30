import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';

export default function WaterIntakeComponent() {
  const [value, setValue] = useState(1);
  return (
    <View
      style={{
        borderRadius: 24,
        margin: 12,
        paddingHorizontal: 12,
        paddingVertical: 24,
        backgroundColor: '#FDF7EB',
      }}>
      <Text style={{fontSize: 16}}>Water Intake</Text>
      <Text
        style={{
          fontSize: 12,
          color: '#808080',
          marginTop: 6,
        }}>
        Recommended 5 liters
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 24,
        }}>
        {[...Array(5).keys()].map(item => {
          return (
            <Image
              key={item}
              style={{
                height: 32,
                width: 24,
                margin: 12,
              }}
              source={
                item + 1 <= value
                  ? require('../assets/full_glass.png')
                  : require('../assets/empty_glass.png')
              }
            />
          );
        })}
      </View>

      <Slider
        value={value}
        step={10}
        style={{height: 40}}
        thumbTintColor="#4F949C"
        minimumValue={1}
        maximumValue={5}
        minimumTrackTintColor="#4F949C"
        maximumTrackTintColor="#000000"
        onValueChange={value => {
          setValue(value);
        }}
      />
    </View>
  );
}
