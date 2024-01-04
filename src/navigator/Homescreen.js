/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, StatusBar, SafeAreaView, Image, Text } from 'react-native'
import ColorfulCard from 'react-native-colorful-card'

const Homescreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginLeft: 5,
            marginBottom: 16,
          }}
        >
          <Image
            source={require('../../src/assets/mylogo.png')}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Herveg Admin</Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <ColorfulCard
            title="Total For Enrolments"
            value="5"
            valuePostfix="active"
            footerTitle="5%rate"
            footerValue="Farmers"
            iconImageSource={require('../assets/mylogo.png')}
            onPress={() => {}}
          />

          <ColorfulCard
            title=" Enrolments Per Gender"
            value="8"
            valuePostfix="active"
            footerTitle="2%rate"
            footerValue="Gender"
            iconImageSource={require('../assets/mylogo.png')}
            style={{ backgroundColor: '#7954ff' }}
            onPress={() => {}}
          />
        </View>

        <View
          style={{
            marginTop: 16,
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <ColorfulCard
            title="Enrolments Per Package"
            value="5000"
            valuePostfix="active"
            footerTitle="3%rate"
            footerValue="package"
            iconImageSource={require('../assets/mylogo.png')}
            style={{ backgroundColor: '#fe8f62' }}
            onPress={() => {}}
          />
          <ColorfulCard
            title="Total for payments"
            value="16,741"
            valuePostfix="Tsh"
            footerTitle="5%rate"
            footerValue="Cash"
            iconImageSource={require('../assets/mylogo.png')}
            style={{ backgroundColor: '#2bc3ff' }}
            onPress={() => {}}
          />
        </View>

        <View
          style={{
            marginTop: 16,
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <ColorfulCard
            title="payments Per Gender"
            value="5000"
            valuePostfix="Tsh"
            footerTitle="3%rate"
            footerValue="Available"
            iconImageSource={require('../assets/mylogo.png')}
            style={{ backgroundColor: '#5a65ff' }}
            onPress={() => {}}
          />
          <ColorfulCard
            title="payments Per package"
            value="4000"
            valuePostfix="Tsh"
            footerTitle="5%rate"
            footerValue="Available"
            iconImageSource={require('../assets/mylogo.png')}
            style={{ backgroundColor: '#96da45' }}
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

export default Homescreen
