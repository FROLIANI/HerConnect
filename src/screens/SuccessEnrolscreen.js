/* eslint-disable prettier/prettier */
import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function SuccessEnrolscreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Congratulations!</Header>
      <Paragraph>You have Enroled!</Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Admindashbordscreen' }],
          })
        }
      >
        Back
      </Button>
    </Background>
  )
}
