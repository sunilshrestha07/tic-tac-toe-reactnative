import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HorizontalScroll = (props :any) => {
  console.log(props)
  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>Horizontal scroll</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.container}>
            {Array.from({ length: 7 }, (_, index) => (
              <View key={index} style={styles.viewBox}>
                <Text>Item {index + 1}</Text>
              </View>
            ))}
          </View>
          <View>
            <Button title="Photo section" onPress={() => props.navigation.navigate('Photosection')} />
          </View>
            <Text>{props.route.params.name}</Text>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HorizontalScroll;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: 'black',
    marginTop: 10,
  },
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  viewBox: {
    width: 100,
    height: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
