import React from 'react';

import {
  ImageBackground,
  Text,
  StyleSheet,
  Button,
  View,
  Pressable,
} from 'react-native';
// import landingPage from '../images/landingPage.jpg';
// const image = { uri: "https://reactjs.org/logo-og.png" };

const Project = ({navigation}) => {
  const onClickhandler1 = () => {
    navigation.navigate('SignUp');
  };
  const onClickhandler = () => {
    navigation.navigate('Login');
  };
  return (
    <ImageBackground
      style={{flex: 1, resizeMode: 'cover'}}
      source={require('../src/images/bg3.jpg')}>
      <View style={[styles.container]}>
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>  */}
        <View style={[styles.view1]}></View>
        <View style={[styles.view2]}>
          <Text style={[styles.text]}>
            Exprience the easiest way to get{' '}
            <Text style={[styles.text2]}>great food</Text> Delivery
          </Text>
        </View>
        <View style={[styles.view3]}>
          {/* <Button style={styles.button} title="Login with your account" color="grey" onPress={ () => {}}/>
        <Text>   </Text > 
        <Button style={styles.button}  title="Dont have an account get one now" color='orange' onPress={ () => {}}/> */}
          <Pressable style={styles.button1} onPress={onClickhandler}>
            <Text style={styles.textbut}>Login with your account</Text>
          </Pressable>
          <Text></Text>
          <Pressable style={styles.button2} onPress={onClickhandler1}>
            <Text style={styles.textbut}>Dont have an account get one now</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 1,
  },
  view2: {
    flex: 3,
  },
  text: {
    color: 'black',
    fontSize: 40,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  button1: {
    backgroundColor: 'grey',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  button2: {
    backgroundColor: 'grey',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  text2: {
    fontWeight: 'bold',
  },

  view3: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 30,
  },
  textbut: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Project;
