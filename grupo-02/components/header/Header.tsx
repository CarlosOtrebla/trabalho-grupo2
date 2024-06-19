import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/favicon.png')}/>
    </View>
  )
}
