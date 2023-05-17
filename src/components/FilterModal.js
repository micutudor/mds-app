import React, {useState, useEffect} from 'react'

import {
    Text,
    View,
    Heading,
    Button,
    Modal,
    Center,
    VStack,
    HStack
} from 'native-base';

import Ionicons from '@expo/vector-icons/Ionicons';

function StoreButton({storeName})
{
  const [isBlocked, setIsBlocked] = useState(false);

  return (
    <Button 
      backgroundColor={ isBlocked ? "light.100" : "violet.500" }
      variant={ isBlocked ? "outline" : "solid" }
      onPress={() => setIsBlocked(oldStatus => !oldStatus)}>
      {storeName}
    </Button>
  )
}

function OrdersButton()
{
  const [selectedButton, setSelectedButton] = useState('first');

  return (
    <View>
      <Button 
        mb="3"
        backgroundColor={ selectedButton != 'first' ? "light.100" : "violet.500" }
        variant={ selectedButton != 'first' ? "outline" : "solid" }
        onPress={() => setSelectedButton('first')}>
        Latest added
      </Button>
      <Button 
        backgroundColor={ selectedButton != 'second' ? "light.100" : "violet.500" }
        variant={ selectedButton != 'second' ? "outline" : "solid" }
        onPress={() => setSelectedButton('second')}>
        Expire soon
      </Button>
    </View>
  )
}

export default function FilterModal({ showFilter, onShowFilterChange }) {
  return (
      <Modal isOpen={showFilter} onClose={() => onShowFilterChange(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            <HStack space={2}>
              <Ionicons size={16} name="filter-outline" />
              <Heading size="md">Filter</Heading>
            </HStack>
          </Modal.Header>
          <Modal.Body>
            <Heading size="md">By store</Heading>
            <VStack mb="3" mt="3" space={2} alignItems="center">
              <HStack space={2} alignItems="center">
                <StoreButton storeName="Epic Store"/>
                <StoreButton storeName="Steam"/>
                <StoreButton storeName="Origin"/>
              </HStack>
              <HStack space={2} alignItems="center">
                <StoreButton storeName="Epic Store"/>
                <StoreButton storeName="Steam"/>
                <StoreButton storeName="Origin"/>
              </HStack>
              <HStack space={2} alignItems="center">
                <StoreButton storeName="Epic Store"/>
                <StoreButton storeName="Steam"/>
                <StoreButton storeName="Origin"/>
              </HStack>
            </VStack>
            <Heading size="md" mb="3">Order by</Heading>
            <OrdersButton/>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                onShowFilterChange(false);
              }}>
                Cancel
              </Button>
              <Button onPress={() => {
                onShowFilterChange(false);
              }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
  )
}