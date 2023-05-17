/*
* Todo:
* -> Settings page
* -> Product page?
*/
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  NativeBaseProvider
} from 'native-base';

import { NavigationContainer } from '@react-navigation/native';

import Navigator from './src/components/Navigator';
import FilterModal from './src/components/FilterModal';

export default function App() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Navigator showFilter={showFilter} onShowFilterChange={setShowFilter}/>
        <FilterModal showFilter={showFilter} onShowFilterChange={setShowFilter} />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
