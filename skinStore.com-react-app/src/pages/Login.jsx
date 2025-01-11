import { findUser } from "../services/api";
import  { useState } from "react";
import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  Alert,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState({ status: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await findUser(formData.email, formData.password);

    if (user) {
      setAlert({ status: "success", message: "Login Successful!" });
      onLogin(user);
    } else {
      setAlert({ status: "error", message: "Invalid email or password" });
    }

    // Reset alert after 3 seconds
    setTimeout(() => setAlert({ status: "", message: "" }), 3000);
  };

  return (
    <Box
      p={6}
      maxW="400px"
      mx="auto"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="lg"
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        mb={6}
        textAlign="center"
        color="teal.500"
      >
        Login
      </Text>

      {alert.message && (
        <Alert status={alert.status} mb={4} borderRadius="md">
         
          <AlertTitle>{alert.status === "success" ? "Success!" : "Error!"}</AlertTitle>
          <AlertDescription>{alert.message}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <VStack spacing={5}>
          <Box>
            <Text fontSize="sm" mb={1} fontWeight="medium" color="gray.700">
              Email
            </Text>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              size="md"
              focusBorderColor="teal.500"
            />
          </Box>
          <Box>
            <Text fontSize="sm" mb={1} fontWeight="medium" color="gray.700">
              Password
            </Text>
            <Input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              size="md"
              focusBorderColor="teal.500"
            />
          </Box>
          <Button type="submit" colorScheme="teal" w="full" size="md">
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
