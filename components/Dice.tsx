import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import React, {useState} from 'react';

export default function Dice() {
  const one = require('../images/one.png');
  const two = require('../images/two.png');
  const three = require('../images/three.png');
  const four = require('../images/four.png');
  const five = require('../images/five.png');
  const six = require('../images/six.png');

  const [number, setNumber] = useState<number>(1);
  const [image, setImage] = useState(one);

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  const handelRoll = () => {
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(newNumber);
    switch (newNumber) {
      case 1:
        setImage(one);
        break;
      case 2:
        setImage(two);
        break;
      case 3:
        setImage(three);
        break;
      case 4:
        setImage(four);
        break;
      case 5:
        setImage(five);
        break;
      case 6:
        setImage(six);
        break;
    }
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  };

  return (
    <View>
      <View style={styles.imageContainer}>
        <Text style={styles.text}>{number}</Text>
        <Image style={styles.image} source={image} />
      </View>
      <TouchableOpacity style={styles.text}>
        <Text style={styles.text} onPress={handelRoll}>
          Roll the dice
          {number}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4545',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    objectFit: 'cover',
    overflow: 'hidden',
    padding: 10,
  },
});
