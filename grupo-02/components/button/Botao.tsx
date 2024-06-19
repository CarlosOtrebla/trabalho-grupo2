import { StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

interface BtnProps {
  routeName: string;
  title: string;
}

export default function Botao({ routeName, title }: BtnProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title={title}
        onPress={() => {
          navigation.jumpTo(routeName);
        }}
      />
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
