import React, { useState } from 'react';
import { Box, Text, Flex, Button, Image } from '@chakra-ui/react';
import '../App.css'
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', price: 29.99, image: 'https://via.placeholder.com/100', quantity: 1 },
    { id: 2, name: 'Product B', price: 19.99, image: 'https://via.placeholder.com/100', quantity: 2 },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Shopping Cart</Text>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          {cartItems.map(item => (
            <Flex key={item.id} align="center" gap={4} mb={4}>
              <Image src={item.image} alt={item.name} boxSize="100px" />
              <Box>
                <Text fontWeight="bold">{item.name}</Text>
                <Text>${item.price}</Text>
                <Text>Quantity: {item.quantity}</Text>
              </Box>
              <Button colorScheme="red" onClick={() => handleRemove(item.id)}>
                Remove
              </Button>
            </Flex>
          ))}
          {/* <Divider my={4} / */}
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="bold">Total:</Text>
            <Text fontSize="lg">${calculateTotal()}</Text>
          </Flex>
          <Button colorScheme="teal" mt={4}>
            Proceed to Checkout
          </Button>
        </>
      )}
    </Box>
  );
};

export default Cart;
