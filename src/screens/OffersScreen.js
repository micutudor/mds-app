import { StyleSheet } from 'react-native'
import React from 'react'

import {
  ScrollView,
  View
} from 'native-base';

import ListItem from '../components/ListItem';

import FilterModal from '../components/FilterModal';

const OffersScreen = () => {
  return (
    <ScrollView>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
    </ScrollView>
  )
}

export default OffersScreen

const styles = StyleSheet.create({})