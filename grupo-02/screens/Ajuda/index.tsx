import {View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import Botao2 from '../../components/button/Botao2';

export default function Ajuda() {
  return (
    <View style={styles.container}>
      <Botao2 routeName={'Home'} title={'Ir para Home'}/>      
    </View>
  );
}
