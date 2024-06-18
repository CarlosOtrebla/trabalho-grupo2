import { StyleSheet, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import React from 'react'

export default function Botao({routeName}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title='Botão' onPress={()=>{
        navigation.jumpTo(routeName);
      }}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '##d35353'
  },
});
