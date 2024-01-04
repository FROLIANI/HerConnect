/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header style={styles.title}>HerConnect</Header>
      <Logo />
      <Header>Let Connect Them</Header>
      <Paragraph>The better way to reach women Support.</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Register as Officer
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize: 40,
    fontWeight: '700',
    padding: 20,
    color:'blue'
    
  },
}
)

