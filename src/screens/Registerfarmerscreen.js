/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React, { useState, useEffect } from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'

import AsyncStorage from '@react-native-async-storage/async-storage'
import NetInfo from '@react-native-community/netinfo'

import { getDatabase, ref, set, push } from 'firebase/database'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

// Firebase
import '../config/firebase'

import { nameValidator } from '../helpers/nameValidator'
import { phoneValidator } from '../helpers/phoneValidator'
import { farmerIdValidator } from '../helpers/farmerIdValidator'
import { locationValidator } from '../helpers/locationValidator'
import { vegetablebundleValidator } from '../helpers/vegetablebundleValidator'

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [phone, setphone] = useState({ value: '', error: '' })
  const [location, setlocation] = useState({ value: '', error: '' })
  const [farmerId, setfarmerId] = useState({ value: '', error: '' })
  const [vegetablebundle, setvegetablebundle] = useState({
    value: '',
    error: '',
  })

  // Data to Register
  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value)
    const phoneError = phoneValidator(phone.value)
    const locationError = locationValidator(location.value)
    const farmeridError = farmerIdValidator(farmerId.value)
    const vegetablebundleError = vegetablebundleValidator(vegetablebundle.value)

    if (
      phoneError ||
      nameError ||
      locationError ||
      farmeridError ||
      vegetablebundleError
    ) {
      setName({ ...name, error: nameError })
      setphone({ ...phone, error: phoneError })
      setlocation({ ...location, error: locationError })
      setfarmerId({ ...farmerId, error: farmeridError })
      setvegetablebundle({ ...vegetablebundle, error: vegetablebundleError })

      return
    }
    try {
      const netInfoState = await NetInfo.fetch()
      const isOnline = netInfoState.isConnected

      if (isOnline) {
        const db = getDatabase()
        const usersRef = ref(db, 'HerConnect_Farmers')
        const newUserRef = push(usersRef)

        await set(newUserRef, {
          name: name.value,
          phone: phone.value,
          location: location.value,
          farmerId: farmerId.value,
          vegetablebundle: vegetablebundle.value,
        })
      } 

      // Offline handling
      else 
      {
        const offlineData =
          (await AsyncStorage.getItem('offlineDataFarmers')) || '[]'
        const parsedData = JSON.parse(offlineData)
        const newData = {
          name: name.value,
          phone: phone.value,
          location: location.value,
          farmerId: farmerId.value,
          vegetablebundle: vegetablebundle.value,
        }
        parsedData.push(newData)
        await AsyncStorage.setItem(
          'offlineDataFarmers',
          JSON.stringify(parsedData)
        )
      }
    } catch (error) {
      console.error('Error during registration:', error)
      // Handle the error
    }
  }

  useEffect(() => {
    // Check for and process offline data on component mount
    const processOfflineData = async () => {
      const offlineData = await AsyncStorage.getItem('offlineDataFarmers')
      if (offlineData) {
        const parsedData = JSON.parse(offlineData)
        for (const data of parsedData) {
        }
        
        // Clear stored offline data after successful sync
        await AsyncStorage.removeItem('offlineDataFarmers')
      }
    }

    processOfflineData()
  }, [])

  return (
    <ScrollView>
      <Background>
        <Header style={styles.title}>HerConnect</Header>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Enrole New Farmer</Header>
        <TextInput
          label="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
        />

        <TextInput
          label="Phone"
          returnKeyType="next"
          value={phone.value}
          onChangeText={(text) => setphone({ value: text, error: '' })}
          error={!!phone.error}
          errorText={phone.error}
          autoCapitalize="none"
          autoCompleteType="tel"
          textContentType="telephoneNumber"
          keyboardType="numeric"
        />

        <TextInput
          label="Location"
          returnKeyType="next"
          value={location.value}
          onChangeText={(text) => setlocation({ value: text, error: '' })}
          error={!!location.error}
          errorText={location.error}
          autoCapitalize="none"
          autoCompleteType="location"
        />

        <TextInput
          label="Farmer Id"
          returnKeyType="next"
          value={farmerId.value}
          onChangeText={(text) => setfarmerId({ value: text, error: '' })}
          error={!!farmerId.error}
          errorText={farmerId.error}
          autoCapitalize="none"
          autoCompleteType="farmerId"
        />

        <TextInput
          label="Vegetable Bundle"
          returnKeyType="next"
          value={vegetablebundle.value}
          onChangeText={(text) =>
            setvegetablebundle({ value: text, error: '' })
          }
          error={!!vegetablebundle.error}
          errorText={vegetablebundle.error}
          autoCapitalize="none"
        />

        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{ marginTop: 24 }}
        >
          Register
        </Button>

        <View style={styles.row}>
          <Text>Already have Registered? </Text>
          <TouchableOpacity
            onPress={() => navigation.replace('Admindashbordscreen')}
          >
            <Text style={styles.link}>Go Home</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },

  title: {
    fontSize: 40,
    fontWeight: '700',
    padding: 8,
    color: 'blue',
  },
})
