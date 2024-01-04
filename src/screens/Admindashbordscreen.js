/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies   */
/* eslint-disable prettier/prettier */

import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import '../core/theme'

// Bottom tab screen
import Homescreen from '../navigator/Homescreen'
import Registerfarmerscreen from './Registerfarmerscreen'
import Useraccountscreen from '../navigator/Useraccountscreen'
import Paymentscreen from '../navigator/Paymentscreen'

const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          headerStyle: { backgroundColor: 'green' },
          headerTintColor: 'yellow',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Register"
        component={Registerfarmerscreen}
        options={{
          tabBarLabel: 'Registration',
          headerShown: false,
          headerStyle: { backgroundColor: 'green' },
          headerTintColor: 'yellow',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="cog" color="green" size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Payment"
        component={Paymentscreen}
        options={{
          tabBarLabel: 'Payment',
          headerShown: true,
          headerStyle: { backgroundColor: 'green' },
          headerTintColor: 'yellow',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="credit-card"
              color="green"
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={Useraccountscreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: true,
          headerStyle: { backgroundColor: 'green' },
          headerTintColor: 'yellow',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="account" color="green" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return <MyTabs />
}
