import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import Section1 from './Section1';
import Section2 from './Section2';

export default function HomeScreen(props: any) {
  const actionListener = useCallback(() => {
    props?.navigation.navigate('SummaryScreen');
  }, []);
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={{}}>
      <Section1 />
      <Section2
        data={[...new Array(3).keys()]}
        headerName={'My Plans'}
        actionListener={actionListener}
      />
    </ScrollView>
  );
}
