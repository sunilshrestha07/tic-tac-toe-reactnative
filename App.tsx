import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Flatlist from './components/Flatlist';
import HorizontalScroll from './components/HorizontalScroll';
import Photosection from './components/Photosection';
import Dice from './components/Dice';
import Flat from './components/Flat';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tic from './components/Tic';
import SmSU from './components/Smsu';
import Smsu from './components/Smsu';

const App = () => {
  const isDarkmode = useColorScheme() === 'dark';
  useEffect(() => {
    // Hide splash screen after app is ready
    SplashScreen.hide();
  }, []);

  const stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    //   <stack.Navigator initialRouteName='Flatlist'>
    //     <stack.Screen name="Flatlist" component={Flatlist} />
    //     <stack.Screen name="HorizontalScroll" component={HorizontalScroll} />
    //     <stack.Screen name="Photosection" component={Photosection} />
    //     <stack.Screen name="Dice" component={Dice} />
    //   </stack.Navigator>
    // </NavigationContainer>
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Tic Tac Toe</Text>
      </View>
      <View>
        <Smsu />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
