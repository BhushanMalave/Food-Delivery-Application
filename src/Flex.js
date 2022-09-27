import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Flex = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.body}>
        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 40}}>
          Flexbox
        </Text>
        <Text></Text>
        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          FlexDirection - Row
        </Text>
        <View style={styles.view1}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          FlexDirection - Row-Reverse
        </Text>
        <View style={styles.view2}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          FlexDirection - Column
        </Text>
        <View style={styles.view3}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          FlexDirection - Column Reverse
        </Text>
        <View style={styles.view4}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          JustifyContent - Start
        </Text>
        <View style={styles.view5}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>8</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          JustifyContent - End
        </Text>
        <View style={styles.view6}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          JustifyContent - Center
        </Text>
        <View style={styles.view7}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          JustifyContent - Space Between
        </Text>
        <View style={styles.view8}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          JustifyContent - Space Around
        </Text>
        <View style={styles.view9}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          Flex Wrap - Wrap
        </Text>
        <View style={styles.view10}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          Flex Wrap - No Wrap
        </Text>
        <View style={styles.view11}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          Align Item - Flex Start
        </Text>
        <View style={styles.view12}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          Align Item - Flex End
        </Text>
        <View style={styles.view13}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          Align Item - Center
        </Text>
        <View style={styles.view14}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          Align Item - Stretch
        </Text>
        <View style={styles.view15}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>

        <Text
          style={{backgroundColor: 'grey', textAlign: 'center', fontSize: 25}}>
          Align Item - Baseline
        </Text>
        <View style={styles.view16}>
          <View style={styles.container}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'orange',
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
  view1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'purple',
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 3,
    borderRadius: 5,
  },
  view2: {
    flex: 1,
    flexDirection: 'row-reverse',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
  },
  view3: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
  },
  view4: {
    flex: 1,
    flexDirection: 'column-reverse',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
  },
  view5: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
  },
  view6: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
  },
  view7: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
  },
  view8: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
  },
  view9: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
  },
  view10: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
  },
  view11: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
  },
  view12: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
    height: 150,
    alignItems: 'flex-start',
  },
  view12: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
    height: 150,
    alignItems: 'flex-start',
  },
  view13: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
    height: 150,
    alignItems: 'flex-end',
  },
  view14: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
    height: 150,
    alignItems: 'center',
  },
  view15: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
    height: 200,
  },
  view16: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'purple',
    marginVertical: 10,
    height: 200,
    alignItems: 'baseline',
  },

  container: {
    backgroundColor: 'orange',
    borderRadius: 1,
    borderWidth: 2,
    borderRadius: 5,
    margin: 2,
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
});

export default Flex;
