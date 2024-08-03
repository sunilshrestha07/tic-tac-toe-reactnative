import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const data = [
  { name: 'Suneel', roll: '123', age: '20' },
  { name: 'Smriti', roll: '12', age: '20' },
  { name: 'Shubheksha', roll: '13', age: '12' },
  { name: 'Shrijan', roll: '23', age: '14' },
  { name: 'Laska', roll: '152', age: '89' },
];

const ListItem = ({ item }:any) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{item.name}</Text>
    <Text style={styles.itemText}>Roll: {item.roll}</Text>
    <Text style={styles.itemText}>Age: {item.age}</Text>
  </View>
);

export default function Flat() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>This is a flat list</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.roll}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
  },
});
