import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import HomeScreenSection1 from './HomeScreenSection1';
import HomeScreenSection2 from './HomeScreenSection2';

export default function HomeScreen(props: any) {
  const actionListener = useCallback(() => {
    props?.navigation.navigate('SummaryScreen');
  }, []);
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{backgroundColor: 'white'}}>
      <HomeScreenSection1 />
      <HomeScreenSection2
        data={[...new Array(3).keys()]}
        headerName={'My Plans'}
        actionListener={actionListener}
      />
    </ScrollView>
  );
}
