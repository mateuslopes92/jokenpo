import React, {useState} from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

import pedraImg from '../../../assets/images/pedra.png';
import papelImg from '../../../assets/images/papel.png';
import tesouraImg from '../../../assets/images/tesoura.png';

export default function Choices({choice, player}) {
  const [imageComputer, setImageComputer] = useState('');
  const [imageUser, setImageUser] = useState('');

  if (choice == 'pedra') {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{player}</Text>
        <Image source={pedraImg} />
      </View>
    );
  } else if (choice == 'papel') {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{player}</Text>
        <Image source={papelImg} />
      </View>
    );
  } else if (choice == 'tesoura') {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{player}</Text>
        <Image source={tesouraImg} />
      </View>
    );
  } else {
    return false;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
