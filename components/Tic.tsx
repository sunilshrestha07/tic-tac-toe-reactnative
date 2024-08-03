import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const initialData = Array(9).fill(null);

export default function Tic() {
  const [board, setBoard] = useState<(string | null)[]>(initialData);
  const [currentPlayer, setCurrentPlayer] = useState<string>('X');
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number) => {
    if (board[index] || winner) {
      Alert.alert("Cell is already selected or game is over");
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
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
    setCurrentPlayer('X');
  };

  return (
    <View>
      <View style={styles.mainContainer}>
        {board.map((item, index) => (
          <View key={index} style={styles.container}>
            <TouchableOpacity
              style={[styles.box
              ]}
              onPress={() => handleClick(index)}>
              <View>
                <Text style={[styles.text]}>{item}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View>
        <Text style={styles.text}>
          {winner ? `Winner: ${winner}` : `Current Player: ${currentPlayer}`}
        </Text>
        <Text style={styles.text} onPress={resetGame}>Reset Game</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    
  },
  container: {
    width: '25%',
    height: 100,
    margin: 10,
  },
  mainContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    
  },

});
