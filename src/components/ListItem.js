import React from 'react'

import {
  TouchableOpacity,
} from 'react-native';

import {
    Box,
    Center,
    Stack,
    AspectRatio,
    Image,
    Heading,
    Text,
    HStack
} from 'native-base';

import { useNavigation } from '@react-navigation/native';

export default function ListItem() {
  const navigation = useNavigation();

  return (
    <Box alignItems="center">
      <Box maxW="80" mt="2.5" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" backgroundColor="gray.50">
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image 
                source={{
                    uri: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_2560x1440_Landscaped%20Store-2560x1440-79155f950f32c9790073feaccae570fb.jpg"
                }} 
                alt="image"/>
          </AspectRatio>
          <Center 
            bg="violet.500"  
            _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
                textDecorationLine: 'line-through', 
                textDecorationStyle: 'solid'
            }} 
            position="absolute" 
            bottom="0" 
            px="3" 
            py="1.5">
            $15.99
          </Center>
        </Box>
        <TouchableOpacity onPress={() => navigation.navigate("Offer")}>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                Grand Theft Auto V
              </Heading>
              <Text fontSize="xs" color="violet.500" fontWeight="500" ml="-0.5" mt="-1">
                Epic Store
              </Text>
            </Stack>
            <Text fontWeight="400">
              Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. 
              Players complete missions—linear scenarios with set objectives—to progress through the story. 
              Outside of the missions, players may freely roam the open world.
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600">
                  Expire in 5 days
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </TouchableOpacity>
      </Box>
    </Box>
  )
}