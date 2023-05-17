import React, {useState} from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';


import {
  IconButton,
  Flex
} from 'native-base';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import * as Screen from '../screens/index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TopButtons = ({ showFilter, onShowFilterChange, navigation }) => {
  return (
    <Flex direction="row" mb="2.5" mt="1.5">
      <IconButton 
        icon={<Ionicons size={16} name="filter-outline" />} 
        onPress={() => {
          onShowFilterChange(true);
        }}
      />
      <IconButton 
        icon={<Ionicons size={16} name="settings-outline" />}
        onPress={() => navigation.navigate('Settings')}
      />
    </Flex>
  );
}

const TabNavigator = ({route, navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Free forever" 
        component={Screen.OffersScreen}
        options={{
          tabBarLabel: 'Free',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="infinite" color={color} size={size} />
          ),
          headerRight: () => (
            <TopButtons showFilter={route.params.showFilter} onShowFilterChange={route.params.onShowFilterChange} navigation={navigation}/>
          ),
        }}
      />
      <Tab.Screen name="Free for a limited time" 
        component={Screen.OffersScreen}
        options={{
          tabBarLabel: 'Limited time',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alert-circle-outline" color={color} size={size} />
          ),
          headerRight: () => (
            <TopButtons showFilter={route.params.showFilter} onShowFilterChange={route.params.onShowFilterChange} navigation={navigation}/>
          ),
        }}
      />
      <Tab.Screen name="With subscription" 
        component={Screen.OffersScreen} 
        options={{
          tabBarLabel: 'Subs',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card-outline" color={color} size={size} />
          ),
          headerRight: () => (
            <TopButtons showFilter={route.params.showFilter} onShowFilterChange={route.params.onShowFilterChange} navigation={navigation}/>
          ),
        }}
      />
      <Tab.Screen name="DLC" 
        component={Screen.OffersScreen} 
        options={{
          tabBarLabel: 'DLC',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="download-outline" color={color} size={size} />
          ),
          headerRight: () => (
            <TopButtons showFilter={route.params.showFilter} onShowFilterChange={route.params.onShowFilterChange} navigation={navigation}/>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Navigator = ({showFilter, onShowFilterChange}) => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          initialParams={{showFilter, onShowFilterChange}}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={Screen.SettingsScreen} />
        <Stack.Screen name="Offer" component={Screen.OfferInfoScreen} />
    </Stack.Navigator>
  )
}
