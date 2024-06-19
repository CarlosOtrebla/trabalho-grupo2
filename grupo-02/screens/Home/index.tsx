import { StyleSheet, View, Text, Button } from 'react-native';
import React from 'react';
import Botao2 from '../../components/button/Botao2';
import styles from './style';
import Header from '../../components/header/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Botao2 routeName={'Ajuda'} title={'Ir para Ajuda'}/>
      <Botao2 routeName={'Sobre'} title={'Ir para Sobre'}/>
      <Botao2 routeName={'Contato'} title={'Ir para Contato'}/>
    </View>
  );
}

