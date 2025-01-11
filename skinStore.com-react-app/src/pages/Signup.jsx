import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  Alert,
  AlertTitle,
  AlertDescription,
  Flex,
} from "@chakra-ui/react";
import { addUser, getUsers } from "../services/api";

const Signup = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [alert, setAlert] = useState({ status: "", message: "" });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const users = await getUsers();
      if (users.some((user) => user.email === formData.email)) {
        setAlert({ status: "error", message: "User/email already exists." });
        return;
      }

      await addUser(formData);
      setAlert({ status: "success", message: "Signup Successful!" });
      setFormData({ name: "", email: "", password: "" }); // Reset form

      // Auto-hide alert after 3 seconds
      setTimeout(() => setAlert({ status: "", message: "" }), 3000);
  };

  return (
    <Box p={6} maxW="400px" mx="auto" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Text fontSize="2xl" fontWeight="bold" color="teal.500" textAlign="center" mb={4}>
        Signup
      </Text>

      {/* Custom Divider */}
      <Flex borderBottom="1px solid #CBD5E0" mb={4} />

      {/* Alert Message */}
      {alert.message && (
        <Box
          bg={alert.status === "error" ? "red.100" : "green.100"}
          borderRadius="md"
          p={3}
          mb={4}
        >
          <Text
            fontWeight="medium"
            color={alert.status === "error" ? "red.600" : "green.600"}
          >
            {alert.status === "error" ? "Error!" : "Success!"}
          </Text>
          <Text fontSize="sm">{alert.message}</Text>
        </Box>
      )}

      <form onSubmit={handleSubmit}>
        <VStack spacing={5}>
          <Box w="full">
            <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={1}>
              Name
            </Text>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter user name"
              size="md"
              focusBorderColor="teal.500"
            />
          </Box>
          <Box w="full">
            <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={1}>
              Email
            </Text>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              size="md"
              focusBorderColor="teal.500"
            />
          </Box>
          <Box w="full">
            <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={1}>
              Password
            </Text>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              size="md"
              focusBorderColor="teal.500"
            />
          </Box>
          <Button type="submit" colorScheme="teal" w="full" size="md">
            Signup
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Signup;
