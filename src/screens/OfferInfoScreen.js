import { StyleSheet, ScrollView, Linking } from 'react-native';
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

const OfferInfoScreen = ({navigation, route}) => {
  const {gameData, offerData} = route.params;

  let gameTags = '', tCount = 0;
  gameData.game_tags.map((tag) => {
    tCount ++;
    gameTags += tag;

    if (tCount < gameData.game_tags.length)
        gameTags += ', ';
  });

  let date = new Date(offerData.offer_end_date);
  let dateBeauty = ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" +
                    date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);

  return (
    <ScrollView>
        <View>
            <AspectRatio w="100%" ratio={16 / 9}>
                <Image 
                    source={{
                        uri: gameData.game_poster_path
                    }} 
                    alt="image"/>
            </AspectRatio>
        </View>
        <Stack p="4" space={3}>
            <Heading mb="4">{gameData.game_name}</Heading>
            <Heading size="sm">Offer details</Heading>
            <View alignItems="center" mb="4">
                <HStack>
                    <View alignItems="center" mx="4">
                        <Heading size="xs">Store</Heading>
                        <Text>{offerData.offer_store}</Text>
                    </View>
                    <Divider orientation="vertical"></Divider>
                    <View alignItems="center" mx="4">
                        <Heading size="xs">End</Heading>
                        <Text>{dateBeauty}</Text>
                    </View>
                    <Divider orientation="vertical"></Divider>
                    <View alignItems="center" mx="4">
                        <Heading size="xs">Type</Heading>
                        <Text>{offerData.offer_type}</Text>
                    </View>
                </HStack>
            </View>
            <Heading size="sm">Summary</Heading>
            <Box mb="4" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" backgroundColor="gray.50">
                <Text p="4">
                    {gameData.game_summary}
                </Text>
            </Box>
            <Heading size="sm">Game's infos</Heading>
            <VStack mb="4">
                <Text color="violet.500">Developer</Text>
                <Text mb="2">{gameData.game_developer}</Text>
                <Text color="violet.500">Publisher</Text>
                <Text mb="2">{gameData.game_publisher}</Text>
                <Text color="violet.500">Tags</Text>
                <Text>{gameTags}</Text>
            </VStack>
            <Button backgroundColor="violet.500" onPress={async () => await Linking.openURL(offerData.offer_link)}>Redeem</Button>
        </Stack>
    </ScrollView>
  )
}

export default OfferInfoScreen

const styles = StyleSheet.create({})