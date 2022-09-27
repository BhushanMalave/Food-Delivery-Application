import React, {useState} from 'react';
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

function Count({navigation}) {
  const [count, setCount] = useState(0);
  const go = () => {
    navigation.navigate('Home');
  };
  const onClickhandler = () => {
    setCount(+(count + 1));
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <View
      style={{
        backgroundColor: 'grey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 30}}>{count}</Text>
      <Pressable onPress={onClickhandler}>
        <Text style={{fontSize: 30}}>click</Text>
      </Pressable>
      <Text style={{fontSize: 30}}>You clicked {count} times</Text>
      <Pressable onPress={reset}>
        <Text style={{fontSize: 30}}>Reset</Text>
      </Pressable>
      <Pressable onPress={go}>
        <Text style={{fontSize: 30}}>Home</Text>
      </Pressable>
    </View>
  );
}

export default Count;
