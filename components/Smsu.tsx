import {
    Alert,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import ReactNativeHapticFeedback from "react-native-haptic-feedback";
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  
  const initialData = Array(9).fill(null);
  
  //images
  const suneel = require('../images/sunil.jpg');
  const smriti = require('../images/sm.jpg');
  const winnerpic = require('../images/winner.jpg');
  
  export default function Smsu() {
    const [board, setBoard] = useState<(string | null)[]>(initialData);
    const [winner, setWinner] = useState<string | null>(null);
    const [currentPlayer, setCurrentPlayer] = useState<string>('smriti');
  
    const handleClick = (index: number) => {
      if (board[index] || winner) {
        Alert.alert('Cell is already selected or game is over');
        ReactNativeHapticFeedback.trigger("notificationWarning", options);
        return;
      }

      ReactNativeHapticFeedback.trigger("impactMedium", options);
  
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
  
      const newWinner = calculateWinner(newBoard);
      if (newWinner) {
        setWinner(newWinner);
      } else if (newBoard.every(cell => cell !== null)) {
        Alert.alert('It\'s a draw!');
      } else {
        setCurrentPlayer(currentPlayer === 'smriti' ? 'suneel' : 'smriti');
      }
    };
  
    const calculateWinner = (board: (string | null)[]) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      return null;

      
    };
  
    const resetGame = () => {
      setBoard(initialData);
      setWinner(null);
      setCurrentPlayer('smriti');
    };
  
    return (
      <View>
        <View>
            {winner ? (
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, width: '100%'}}>
                    <Text style={{color: 'green',fontSize: 20, fontWeight: 'bold',marginBottom: 10}}>Winner:{winner}</Text>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={winner === 'smriti'? winnerpic : suneel} />
                </View>
              </View>
            ):(
            <View >
                <Text style={styles.text}>
                    Current Player: <Text style={{color: 'green'}}>{currentPlayer}</Text>
                </Text>
            </View>
            )}
        </View>
        <View style={styles.mainContainer}>
          {board &&
            board.map((item, index) => (
              <TouchableOpacity onPress={() => handleClick(index)} key={index}>
                <View style={styles.box}>
                  {item && (
                    <ImageBackground
                      source={item === 'smriti' ? smriti : suneel}
                      resizeMode="cover"
                      style={styles.image}
                    />
                  )}
                  <Text style={[styles.text, {position: 'absolute'}]}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
        <TouchableOpacity onPress={resetGame}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text
              style={[
                styles.text,
                {
                  color: 'white',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  backgroundColor: '#DB5450',
                  width: '50%',
                },
              ]}>
              Reset Game
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 20,
      gap: 20,
      justifyContent: 'space-between',
    },
    box: {
      width: 100,
      height: 100,
      borderWidth: 1,
      borderColor: 'black',
      display: 'flex',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      objectFit: 'cover',
      overflow: 'hidden',
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    imageBox:{
      width: 200,
      height: 200,
      borderWidth: 1,
      borderColor: 'black',
      display: 'flex',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      objectFit: 'cover',
      overflow: 'hidden',
    }
  });
  