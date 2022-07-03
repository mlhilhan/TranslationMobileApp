/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TranslationPage from './src/screens/TranslationPage';
import HistoryPage from './src/screens/HistoryPage';
import SettingsPage from './src/screens/SettingsPage';
// import {i18n} from './src/languages/_i18n.ts';

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
        // name={() => {
        //   I18n.t('translation');
        // }}
        name="Translation"
        component={TranslationPage}
        options={{
          tabBarLabel: 'Translation',
          tabBarIcon: () => (
            <MaterialIcons name="translate" color={'#fcc741'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        // name={() => {
        //   I18n.t('history');
        // }}
        name="History"
        component={HistoryPage}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: () => (
            <MaterialIcons name="history" color={'#fcc741'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        // name={() => {
        //   I18n.t('settings');
        // }}
        name="Settings"
        component={SettingsPage}
        options={{
          tabBarLabel: 'Settings',
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
