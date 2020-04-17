/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import Header from './src/components/Header';
import Choices from './src/components/Choices';

const App = () => {
  const [choice, setChoice] = useState('');
  const [computerChoice, setConputerChoice] = useState('');
  const [finalResult, setFinalResult] = useState('');

  const jokenpo = (choiced) => {
    const numAleatory = Math.floor(Math.random() * 3);

    var computerChoiced = '';

    switch (numAleatory) {
      case 0:
        computerChoiced = 'pedra';
        break;
      case 1:
        computerChoiced = 'papel';
        break;
      case 2:
        computerChoiced = 'tesoura';
        break;
    }

    var result = '';

    if (computerChoiced === 'pedra') {
      if (choiced === 'pedra') {
        result = 'Empate';
      }

      if (choiced === 'papel') {
        result = 'Você Ganhou!';
      }

      if (choiced === 'tesoura') {
        result = 'Computador Ganhou!';
      }
    }

    if (computerChoiced === 'papel') {
      if (choiced === 'papel') {
        result = 'Empate';
      }

      if (choiced === 'tesoura') {
        result = 'Você Ganhou!';
      }

      if (choiced === 'pedra') {
        result = 'Computador Ganhou!';
      }
    }

    if (computerChoiced === 'tesoura') {
      if (choiced === 'tesoura') {
        result = 'Empate';
      }

      if (choiced === 'pedra') {
        result = 'Você Ganhou!';
      }

      if (choiced === 'papel') {
        result = 'Computador Ganhou!';
      }
    }

    setConputerChoice(computerChoiced);
    setChoice(choiced);
    setFinalResult(result);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#28B4E5" />
      <SafeAreaView style={styles.main}>
        <Header />
        <View style={styles.resultView}>
          <Choices choice={computerChoice} player="Computador" />
          <Choices choice={choice} player="Você" />

          <Text style={styles.resultText}>{finalResult}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <Button
              title="Pedra"
              onPress={() => jokenpo('pedra')}
              color="#28B4E5"
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Papel"
              onPress={() => jokenpo('papel')}
              color="#28B4E5"
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Tesoura"
              onPress={() => jokenpo('tesoura')}
              color="#28B4E5"
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  buttonView: {
    width: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  resultView: {
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#FFF',
  },
  resultText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
    marginTop: 20,
  },
});

export default App;
