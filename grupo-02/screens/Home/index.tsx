import { View } from 'react-native';
import React from 'react';
import Botao2 from '../../components/button/Botao';
import styles from './style';
import Logo from '../../components/header/Logo';

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <Botao2 routeName={'Ajuda'} title={'Ir para Ajuda'} />
      <Botao2 routeName={'Sobre'} title={'Ir para Sobre'} />
      <Botao2 routeName={'Contato'} title={'Ir para Contato'} />
    </View>
  );
}
