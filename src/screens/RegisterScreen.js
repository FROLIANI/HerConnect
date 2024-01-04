/* eslint-disable max-len */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React, { useState } from 'react'
import { View,ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'

import   {getDatabase,ref,set,push} from "firebase/database";
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
// Firebase
import  '../config/firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';

import { nameValidator } from '../helpers/nameValidator'
import { phoneValidator } from '../helpers/phoneValidator'
import { farmerIdValidator } from '../helpers/farmerIdValidator'
import { locationValidator } from '../helpers/locationValidator'


export default function RegisterScreen({ navigation }) {

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const [name, setName] = useState({ value: '', error: '' })
  const [phone, setphone] = useState({ value: '', error: '' })
  const [location, setlocation] = useState({ value: '', error: '' })
  const [officerId, setfarmerId] = useState({ value: '', error: '' })

  // Data to Register
  const onSignUpPressed =async  () => {

    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
  
    const nameError = nameValidator(name.value)
    const phoneError = phoneValidator(phone.value)
    const locationError = locationValidator(location.value)
    const farmeridError = farmerIdValidator(officerId.value)
   

    if (
      emailError||
      passwordError||
      phoneError ||
      nameError ||
      locationError ||
      farmeridError
      
    ) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })

      setName({ ...name, error: nameError })
      setphone({ ...phone, error: phoneError })
      setlocation({ ...location, error: locationError })
      setfarmerId({ ...officerId, error: farmeridError })

      return
    }

    try {
      // Register user in the database, Herconnect
      const db = getDatabase();
      const usersRef = ref(db, 'HerConnect_Officers');
      const newUserRef = push(usersRef);

      const emailValue = email.value;
      const passwordValue = password.value;

      // Create user in Firebase Authentication
  const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
   const user = userCredential.user;

      await set(newUserRef, {
        email: user.email,
        name: name.value,
        phone: phone.value,
        location: location.value,
        farmerId: officerId.value,
      });

    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  } catch (error) {
    console.error('Error during registration:', error);
    // Handle the error, e.g., display a message to the user
  }
  }

  return (
    <ScrollView >
    <Background>
        <Header style={styles.title}>HerConnect</Header>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
      />

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
        label="Officer Id"
        returnKeyType="next"
        value={officerId.value}
        onChangeText={(text) => setfarmerId({ value: text, error: '' })}
        error={!!officerId.error}
        errorText={officerId.error}
        autoCapitalize="none"
        autoCompleteType="farmerId"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        autoCapitalize="none"
        secureTextEntry
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
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
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

  title:{
    fontSize: 40,
    fontWeight: '700',
    padding: 8,
    color:'blue'
    
  },
})
