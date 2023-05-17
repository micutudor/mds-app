import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import {
    Box,
    Button,
    Center,
    Stack,
    AspectRatio,
    Image,
    Heading,
    Text,
    HStack,
    VStack,
    Divider,
    View
} from 'native-base';

const OfferInfoScreen = () => {
  return (
    <ScrollView>
        <View>
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
        </View>
        <Stack p="4" space={3}>
            <Heading mb="4">Grand Theft Auto V</Heading>
            <Heading size="sm">Offer details</Heading>
            <View alignItems="center" mb="4">
                <HStack>
                    <View alignItems="center" mx="4">
                        <Heading size="xs">Store</Heading>
                        <Text>Steam</Text>
                    </View>
                    <Divider orientation="vertical"></Divider>
                    <View alignItems="center" mx="4">
                        <Heading size="xs">End</Heading>
                        <Text>1 july 2023, 8:00pm</Text>
                    </View>
                    <Divider orientation="vertical"></Divider>
                    <View alignItems="center" mx="4">
                        <Heading size="xs">Type</Heading>
                        <Text>Keep forever</Text>
                    </View>
                </HStack>
            </View>
            <Heading size="sm">Summary</Heading>
            <Box mb="4" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" backgroundColor="gray.50">
                <Text p="4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </Box>
            <Heading size="sm">Game's infos</Heading>
            <VStack mb="4">
                <Text color="violet.500">Developer</Text>
                <Text mb="2">Rockstar Games</Text>
                <Text color="violet.500">Publisher</Text>
                <Text mb="2">Rockstar Games</Text>
                <Text color="violet.500">Platforms</Text>
                <Text mb="2">Windows, Linux, Mac</Text>
                <Text color="violet.500">Tags</Text>
                <Text>Action</Text>
            </VStack>
            <Button backgroundColor="violet.500">Redeem</Button>
        </Stack>
    </ScrollView>
  )
}

export default OfferInfoScreen

const styles = StyleSheet.create({})