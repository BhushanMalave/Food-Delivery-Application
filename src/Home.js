import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Text,
  StatusBar,
  Button,
} from 'react-native';

function Home({navigation}) {
  const goTo = () => {
    navigation.navigate('Flex');
  };
  const go = () => {
    navigation.navigate('Count');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable onPress={goTo}>
        <Text style={{fontSize: 30}}>open Flexbox</Text>
      </Pressable>

      <Pressable onPress={go}>
        <Text style={{fontSize: 30}}>goto counter</Text>
      </Pressable>
    </View>
  );
}

export default Home;
