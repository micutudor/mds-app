import { StyleSheet, View } from 'react-native'
import React from 'react'

import {
  Text,
  Divider,
  HStack,
  VStack,
  Switch
} from 'native-base';

import Ionicons from '@expo/vector-icons/Ionicons';

const SettingsScreen = () => {
  return (
    <View>
      <VStack mt={2}>
        <HStack alignItems="center" space={4} ml={4}>
          <View>
            <Ionicons name="business-outline" size={24} color="black"/>
          </View>
          <View>
            <Text color="violet.500">Store notifications</Text>
            <Text>What stores you'll be notified about.</Text>
          </View>
        </HStack>
        <HStack alignItems="center" space={4} ml={16}>
          <Text>Epic Store</Text>
          <Switch size="sm" />
        </HStack>
        <HStack alignItems="center" space={4} ml={16}>
          <Text>Steam</Text>
          <Switch size="sm" />
        </HStack>
        <HStack alignItems="center" space={4} ml={16}>
          <Text>Origin</Text>
          <Switch size="sm" />
        </HStack>
      </VStack>
      <Divider my="2"/>
      <VStack>
        <HStack alignItems="center" space={4} ml={4}>
          <View>
            <Ionicons name="business-outline" size={24} color="black"/>
          </View>
          <View>
            <Text color="violet.500">Category notifications</Text>
            <Text>What categories you'll be notified about.</Text>
          </View>
        </HStack>
        <HStack alignItems="center" space={4} ml={16}>
          <Text>Free forever</Text>
          <Switch size="sm" />
        </HStack>
        <HStack alignItems="center" space={4} ml={16}>
          <Text>Free for a limited time</Text>
          <Switch size="sm" />
        </HStack>
        <HStack alignItems="center" space={4} ml={16}>
          <Text>Free with subscription</Text>
          <Switch size="sm" />
        </HStack>
        <HStack alignItems="center" space={4} ml={16}>
          <Text>DLC</Text>
          <Switch size="sm" />
        </HStack>
      </VStack>
      <Divider my="2"/>
      <HStack alignItems="center" space={4} ml={4}>
        <Ionicons name="stopwatch-outline" size={24} color="black" />
        <Text>Reminder notifications</Text>
        <Switch size="sm" />
      </HStack>
      <Divider my="2"/>
      <HStack space={4} ml={4}>
        <Ionicons name="star-outline" size={24} color="black" />
        <Text>Rate the app</Text>
      </HStack>
      <Divider my="2"/>
      <HStack space={4} ml={4}>
        <Ionicons name="send-outline" size={24} color="black" />
        <Text>Bugs & features requests</Text>
      </HStack>
      <Divider my="2"/>
      <HStack space={4} ml={4}>
        <Ionicons name="document-outline" size={24} color="black" />
        <Text>Terms & conditions</Text>
      </HStack>
      <Divider my="2"/>
      <HStack space={4} ml={4}>
        <Ionicons name="document-outline" size={24} color="black" />
        <Text>Privacy policy</Text>
      </HStack>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})