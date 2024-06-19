import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

interface BtnProps {
  routeName: string;
  title: string;
}

export default function Botao({ routeName, title }: BtnProps) {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate(routeName);
  }

  return (
    <TouchableOpacity onPress={handleClick} style={styles.container}>
     <Text style={styles.TextButtom} >{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d35353',
    borderWidth: 2,
    height: 40,
    width: 200,
    borderRadius: 5,
    

  },
  TextButtom:{
    fontSize: 24
  }  
});
