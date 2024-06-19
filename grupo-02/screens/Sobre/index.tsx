import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Botao2 from '../../components/button/Botao2';
import styles from './style'
export default function Sobre() {
  return (
    <View style={styles.container}>
      <Botao2 routeName={'Home'} title={'Ir para Home'} />      
    </View>
  );
}

