import React, { useState } from "react";
import { Box, Input, Button, Text, Flex, VStack } from "@chakra-ui/react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <Box p={6} maxW="500px" mx="auto" borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Text fontSize="2xl" fontWeight="bold" color="teal.600" textAlign="center" mb={4}>
        Checkout
      </Text>
      {/* Horizontal line replacing Divider */}
      <Box borderBottom="2px" borderColor="gray.200" mb={6} />

      <form onSubmit={handleSubmit}>
        <VStack spacing={5} align="stretch">
          {/* Billing Information */}
          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb={2} color="gray.600">
              Billing Information
            </Text>
            <VStack spacing={3} align="stretch">
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={1}>
                  Full Name
                </Text>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  focusBorderColor="teal.500"
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={1}>
                  Email
                </Text>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  focusBorderColor="teal.500"
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={1}>
                  Address
                </Text>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  focusBorderColor="teal.500"
                />
              </Box>
            </VStack>
          </Box>

          {/* Payment Information */}
          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb={2} color="gray.600">
              Payment Information
            </Text>
            <VStack spacing={3} align="stretch">
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={1}>
                  Card Number
                </Text>
                <Input
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="Enter card number"
                  focusBorderColor="teal.500"
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={1}>
                  Expiry Date
                </Text>
                <Input
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  focusBorderColor="teal.500"
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={1}>
                  CVV
                </Text>
                <Input
                  name="cvv"
                  type="password"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="Enter CVV"
                  focusBorderColor="teal.500"
                />
              </Box>
            </VStack>
          </Box>

          {/* Submit Button */}
          <Button colorScheme="teal" type="submit" size="md" mt={4}>
            Place Order
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Checkout;
