import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Photosection = () => {
  const link = 'https://github.com/sunilshrestha07';


  const data = [
    {
      name: 'suneel',
      image: (require('../images/abc.jpg')),
      link: 'https://github.com/sunilshrestha07',
      course: 'Bsc CSIT',
    },
    {
      name: 'smriti',
      image: (require('../images/suuuu.jpg')),
      link: 'https://www.facebook.com/profile.php?id=100066845513963',
      course: 'Bsc CSIT',
    },
    {
      name: 'shubheksha',
      image: (require('../images/abc.jpg')),
      link: 'https://www.facebook.com/profile.php?id=100082310199099',
      course: 'Bsc CSIT',
    },
    {
      name: 'laska',
      image: (require('../images/abc.jpg')),
      link: 'https://github.com/sunilshrestha07',
      course: 'Bsc CSIT',
    },
    {
      name: 'shrijan',
      image: (require('../images/abc.jpg')),
      link: 'https://github.com/sunilshrestha07',
      course: 'Bsc CSIT',
    },
  ];

  const handelPress = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <View>
      <Text style={styles.text}>Photosection</Text>
      <View>
        <View>
          {data.map((item, index) => (
            <TouchableOpacity key={index} onPress={()=>handelPress(item.link)}>
              <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={item.image} />
                </View>
                <View>
                  <Text style={styles.textSmall}>{item.name}</Text>
                  <Text style={styles.textSmall}>{item.course}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Photosection;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: 'black',
    marginTop: 10,
  },
  textSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    objectFit: 'cover',
    overflow: 'hidden',
    borderRadius: 15,
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  touchBox: {
    width: 56,
    height: 50,
    padding: 10,
  },
  touch: {
    backgroundColor: 'blue',
  },
});
