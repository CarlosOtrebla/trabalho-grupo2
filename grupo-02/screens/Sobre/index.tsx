import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Botao from '../../components/button/Botao';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      <Botao routeName={'Home'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
