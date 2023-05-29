import { StyleSheet } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'

import {
  ScrollView,
  HStack,
  Spinner,
  Heading
} from 'native-base';

import ListItem from '../components/ListItem';

import FilterModal from '../components/FilterModal';

import * as OffersService from '../services/OffersService';

import { FilterContext, FilterDispatchContext } from '../../context';

const OffersScreen = ({ navigation, route }) => {
  const filterDetails = React.useContext(FilterContext);
  const setFilterDetails = useContext(FilterDispatchContext);

  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const getOffers = async () => {
      const data = await OffersService.getOffers({orderByLatest: filterDetails.orderByLatest, category: route.params.category, storeExceptions: filterDetails.storesExcepted});

      if (isSubscribed)
          setOffers(data);
    }

    setIsLoading(true);
    getOffers();
    setIsLoading(false);

    return () => isSubscribed = false;
  }, [JSON.stringify(filterDetails)]);

  return (
    <ScrollView>
    {!isLoading
      ? offers.map(function (offer) { return <ListItem key={offer._id} data={offer}/> })
      : <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
    }
    </ScrollView>
  )
}

export default OffersScreen

const styles = StyleSheet.create({})