import { StyleSheet, View } from 'react-native'
import React, {useState, useEffect} from 'react'

import {
  Text,
  Divider,
  HStack,
  VStack,
  Switch
} from 'native-base';

import Ionicons from '@expo/vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SubscriptionSwitch = ({name, checkValue, onUpdate, onCheck}) => {
  const [checked, setChecked] = useState(checkValue);

  return (
    <HStack alignItems="center" space={4} ml={16}>
      <Text>{name}</Text>
      <Switch size="sm" isChecked={checked} onToggle={() => { 
        setChecked(check => !check);
        onUpdate(upd => upd + 1);
      }}/>
    </HStack>
  );
}

const SettingsScreen = () => {
  const [mutedStores, setMutedStores] = useState([]);
  const [mutedCategories, setMutedCategories] = useState([]);
  const [updated, setUpdated] = useState(0);

  useEffect(() => {
    let isSubscribed = true;

    const initSettings = async () => {
        try {
          const storesString = await AsyncStorage.getItem('muted_stores');
          const stores = JSON.parse(storesString);
        } catch (e) {
          stores = [];
        }

        try {
          const categoriesString = await AsyncStorage.getItem('muted_categories');
          const categories = JSON.parse(categoriesString);
        } catch (e) {
          categories = [];
        }

        if (isSubscribed)
        {
            setMutedStores(stores);
            setMutedCategories(categories);
        }
    }

    initSettings();

    return () => isSubscribed = false;
  }, []);

  useEffect(() => {
    let isSubscribed = true;

    const saveLocal = async () => {
        await AsyncStorage.setItem('muted_stores', JSON.stringify(mutedStores));
        await AsyncStorage.setItem('muted_categories', JSON.stringify(mutedCategories));
    }

    saveLocal();

    return () => isSubscribed = false;
  }, [updated]);

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
        <SubscriptionSwitch name="Epic store" checkValue={false} onUpdate={setUpdated} onCheck={setMutedStores}/>
        <SubscriptionSwitch name="Steam" checkValue={true} onUpdate={setUpdated} onCheck={setMutedStores}/>
        <SubscriptionSwitch name="Origin" checkValue={true} onUpdate={setUpdated} onCheck={setMutedStores}/>
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
        <SubscriptionSwitch name="Keep forever" checkValue={false} onUpdate={setUpdated} onCheck={setMutedCategories}/>
        <SubscriptionSwitch name="Keep for a limited time" checkValue={true} onUpdate={setUpdated} onCheck={setMutedCategories}/>
        <SubscriptionSwitch name="Free with subscription" checkValue={true} onUpdate={setUpdated} onCheck={setMutedCategories}/>
        <SubscriptionSwitch name="DLC" checkValue={false} onUpdate={setUpdated}/>
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