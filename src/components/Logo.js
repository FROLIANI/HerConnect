import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/mylogo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 260,
    marginBottom: 10,
    borderRadius: 20,
  },
})
