import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ItemList = ({ navigation }: any) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Item List</Text>
      <View style={styles.container}>
        <View style={[styles.viewBox, styles.viewBox1]}>
          <Text>Item 1</Text>
        </View>
        <View style={[styles.viewBox, styles.viewBox2]}>
          <Text>Item 2</Text>
        </View>
        <View style={[styles.viewBox, styles.viewBox3]}>
          <Text>Item 3</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Scroll"
          onPress={() => navigation.navigate('HorizontalScroll', {
            "name": 'Suneel Shrestha is don'
          })}
        />
      </View>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: 'black',
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  viewBox: {
    width: 100,
    height: 100,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBox1: {
    backgroundColor: 'red',
  },
  viewBox2: {
    backgroundColor: 'green',
  },
  viewBox3: {
    backgroundColor: 'yellow',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
