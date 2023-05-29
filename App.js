import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import React, {createContext, useEffect, useRef, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Notifications from 'expo-notifications';

import {
  NativeBaseProvider
} from 'native-base';

import { NavigationContainer } from '@react-navigation/native';

import Navigator from './src/components/Navigator';
import FilterModal from './src/components/FilterModal';

import { registerForPushNotificationsAsync, subscribe } from './src/services/NotificationsService';

import { FilterContext, FilterDispatchContext } from './context';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
 
export default function App() {
  const [filterDetails, setFilterDetails] = useState({
    storesExcepted: [],
    orderByLatest: true
  });
  
  const [showFilter, setShowFilter] = useState(false);

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);

  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    let subscribed = false;

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    const subscriptionManagement = async () => {
      if (!subscribed)
        subscribe(expoPushToken);
    }

    subscriptionManagement();

    return () => {
      subscribed = true;
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <FilterContext.Provider value={filterDetails}>
          <FilterDispatchContext.Provider value={setFilterDetails}>
            <Navigator 
              showFilter={showFilter}
              onShowFilterChange={setShowFilter}
            />
            <FilterModal 
              showFilter={showFilter}
              onShowFilterChange={setShowFilter} 
            />
          </FilterDispatchContext.Provider>
        </FilterContext.Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
