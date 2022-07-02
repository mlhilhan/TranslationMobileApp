/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TranslationPage from './src/screens/TranslationPage';
import HistoryPage from './src/screens/HistoryPage';
import SettingsPage from './src/screens/SettingsPage';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1b2945',
        tabBarInactiveTintColor: '#fcc741',
        tabBarActiveBackgroundColor: 'white',
        tabBarInactiveBackgroundColor: '#1b2945',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="TranslationPage"
        component={TranslationPage}
        options={{
          tabBarLabel: 'Çeviri',
          tabBarIcon: () => (
            <MaterialIcons name="translate" color={'#fcc741'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="HistoryPage"
        component={HistoryPage}
        options={{
          tabBarLabel: 'Geçmiş',
          tabBarIcon: () => (
            <MaterialIcons name="history" color={'#fcc741'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{
          tabBarLabel: 'Ayarlar',
          tabBarIcon: () => (
            <MaterialIcons name="settings" color={'#fcc741'} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
