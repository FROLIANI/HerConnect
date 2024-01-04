/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */

import { initializeApp } from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCmz1hiv47YPMsb5Azss7t3A95jZYnbgiI',
  authDomain: 'herconnect-33811.firebaseapp.com',
  databaseURL: 'https://herconnect-33811-default-rtdb.firebaseio.com',
  projectId: 'herconnect-33811',
  storageBucket: 'herconnect-33811.appspot.com',
  messagingSenderId: '470276971431',
  appId: '1:470276971431:web:59e45cbe2f4266f9df3482',
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
