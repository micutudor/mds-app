import React, {useState, useEffect} from 'react'

import {
  TouchableOpacity,
  View
} from 'react-native';

import {
    Box,
    Center,
    Stack,
    AspectRatio,
    Image,
    Heading,
    Text,
    HStack,
    Spinner
} from 'native-base';

import { useNavigation } from '@react-navigation/native';

import * as OffersService from '../services/OffersService';

import moment from 'moment';

export default function ListItem({ data }) {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true)
  const [offerData, setOfferData] = useState({game_summary: ''});

  useEffect(() => {
    let isSubscribed = true;

    const getOfferData = async () => {
      const offer = await OffersService.getOfferData(data.game_id);
          
      if (isSubscribed)
        setOfferData(offer);
    }

    setIsLoading(true);
    getOfferData();
    setIsLoading(false);

    return () => isSubscribed = false;
  }, []);

  return (
    <View>
      {isLoading 
        ? <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
              Loading
            </Heading>
          </HStack>
        : <Box alignItems="center">
            <Box maxW="80" mt="2.5" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" backgroundColor="gray.50">
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image 
                      source={{
                          uri: offerData.game_poster_path
                      }} 
                      alt="image"/>
                </AspectRatio>
              </Box>
              <TouchableOpacity onPress={() => navigation.navigate("Offer", {offerData: data, gameData: offerData})}>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      {offerData.game_name}
                    </Heading>
                    <Text fontSize="xs" color="violet.500" fontWeight="500" ml="-0.5" mt="-1">
                      {data.offer_store}
                    </Text>
                  </Stack>
                  <Text fontWeight="400">
                    {offerData.game_summary.substring(0, 300) + '...'}
                  </Text>
                  <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text color="coolGray.600">
                        Expire {moment(data.offer_end_date).fromNow()}
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
              </TouchableOpacity>
            </Box>
          </Box>
      }
    </View>
  )
}