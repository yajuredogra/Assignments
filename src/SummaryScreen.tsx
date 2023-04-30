import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import WaterIntakeComponent from './WaterIntakeComponent';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import {ProgressChart} from 'react-native-chart-kit';

export default function SummaryScreen(props: any) {
  const onBackPressed = () => props.navigation.goBack(null);
  const [selectedDate, setSelectedDate] = React.useState(moment);
  const data = {
    labels: ['Swim'], // optional
    data: [0.65],
  };
  const PAGE_WIDTH = Dimensions.get('window').width;

  const GraphView = () => {
    return (
      <View
        style={{
          backgroundColor: '#EFF9FC',
          borderRadius: 24,
          margin: 12,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 24,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>1456 kcal</Text>
            <Text
              style={{
                fontSize: 12,
                color: '#808080',
              }}>
              Consumed
            </Text>
          </View>
          <ProgressChart
            data={data}
            width={120}
            height={120}
            strokeWidth={16}
            radius={42}
            chartConfig={{
              backgroundGradientFrom: '#EFF9FC',
              backgroundGradientTo: '#EFF9FC',
              color: (opacity = 1) => `rgba(230, 93, 79, ${opacity})`,
              style: {
                borderRadius: 12,
              },
            }}
            hideLegend={true}
          />

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>2875 kcal</Text>
            <Text
              style={{
                fontSize: 12,
                color: '#808080',
              }}>
              Remaining
            </Text>
          </View>
        </View>
        <View
          style={{
            margin: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Info1</Text>
          <Text>Info2</Text>
          <Text>Info3</Text>
        </View>
      </View>
    );
  };

  const GraphView2 = () => {
    return (
      <View
        style={{
          backgroundColor: '#EFF9FC',
          borderRadius: 24,
          margin: 12,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 24,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>1456 kcal</Text>
            <Text
              style={{
                fontSize: 12,
                color: '#808080',
              }}>
              Consumed
            </Text>
          </View>
          {/* https://github.com/nithinpp69/react-native-circular-progress-indicator#readme 
         https://github.com/Winzana/rn-gauge
         https://www.bacancytechnology.com/blog/animated-progress-meter-in-react-native
         npm i react-native-percentage-circle --save 
https://github.com/bartgryszko/react-native-circular-progress
         */}

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>2875 kcal</Text>
            <Text
              style={{
                fontSize: 12,
                color: '#808080',
              }}>
              Remaining
            </Text>
          </View>
        </View>
        <View
          style={{
            margin: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Info1</Text>
          <Text>Info2</Text>
          <Text>Info3</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{}}>Page Title</Text>
        <View
          style={{
            position: 'absolute',
            start: 0,
            top: 0,
            bottom: 0,
          }}>
          <TouchableWithoutFeedback onPress={onBackPressed}>
            <Image
              style={{
                height: 14,
                width: 14,
                margin: 12,
              }}
              resizeMode="contain"
              source={require('../assets/left_arrow.png')}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>

      <CalendarStrip
        selectedDate={selectedDate}
        scrollable
        calendarAnimation={{type: 'sequence', duration: 30}}
        style={{paddingTop: 30, paddingBottom: 30}}
        calendarColor={'white'}
        calendarHeaderPosition="above"
        calendarHeaderStyle={{color: 'black'}}
        dateNumberStyle={{color: 'black'}}
        dateNameStyle={{color: 'black'}}
        iconContainer={{flex: 0.1}}
        highlightDateNumberStyle={{color: 'white'}}
        highlightDateNameStyle={{color: 'white'}}
        highlightDateContainerStyle={{backgroundColor: 'black'}}
        highlightDateNumberContainerStyle={{backgroundColor: 'black'}}
        onDateSelected={value => {
          setSelectedDate(value);
        }}
      />

      <GraphView />
      {/* <GraphView2 /> */}

      <WaterIntakeComponent />
    </View>
  );
}
