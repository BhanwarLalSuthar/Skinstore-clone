import React from "react";
import {
  Flex,
  Box,
  VStack,
  HStack,
  Text,
  Link,
  SimpleGrid
} from "@chakra-ui/react";
import { FiPhone, FiTruck, FiRefreshCw, FiHelpCircle, FiTarget } from "react-icons/fi";
import { MdCookie, MdCreditCard } from "react-icons/md";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";
import { SiDinersclub, SiAlipay, SiAfterpay,   } from "react-icons/si";

const Help = () => {
  return (
    <Box bg="white" py="8" color="black">
      <Flex justifyContent="space-evenly" gap="20%" >

        {/* Help & Information */}
        <VStack align="start" spacing="3"  color="black" borderTop={"1px solid grey"}>
          <Text fontWeight="bold">Help & Information</Text>
          <HStack>
            <Box as={FiPhone} size="20px" color="black"/>
            {/* <Icon as={FiPhone} /> */}
            <Link href="#" color="black">Customer Service</Link>
          </HStack>
          <HStack>
            <Box as={FiTruck} size="20px"/>
            <Link href="#" color="black">Delivery Information</Link>
          </HStack>
          <HStack>
            <Box as={FiRefreshCw} size="20px"/>
            <Link href="#" color="black">Returns & Refunds</Link>
          </HStack>
          <HStack>
            <Box as={FiHelpCircle} size="20px"/>
            <Link href="#" color="black">Help Center</Link>
          </HStack>
          <HStack>
            <Box as={FiTarget} size="20px"/>
            <Link href="#" color="black">Track my order</Link>
          </HStack>
          <Link href="#" color="black">Accessibility</Link>
          <HStack>
            <Box as={MdCookie} size="20px"/>
            <Link href="#" color="black">Cookie Settings</Link>
          </HStack>
        </VStack>

        <Box display="flex" justifyContent="space-between">
          {/* About SkinStore */}
          <VStack align="start" spacing="3" borderTop={"1px solid grey"}>
            <Text fontWeight="bold">About SkinStore</Text>
            <Link href="#" color="black">About Us</Link>
            <Link href="#" color="black">Brand Directory</Link>
            <Link href="#" color="black">Coupon Codes</Link>
            <Link href="#" color="black">Refer A Friend</Link>
            <Link href="#" color="black">Join SkinStore Experts</Link>
          </VStack>

          {/* Legal */}
          <VStack align="start" spacing="3" borderTop={"1px solid grey"}>
            <Text fontWeight="bold">Legal</Text>
            <Link href="#" color="black">Cookie Information</Link>
            <Link href="#" color="black">Privacy Policy</Link>
            <Link href="#" color="black">Terms & Conditions</Link>
            <Link href="#" color="black">Modern Slavery Statement</Link>
          </VStack>

          {/* How To Contact Us */}
          <VStack align="start" spacing="3" borderTop={"1px solid grey"}>
            <Text fontWeight="bold">How To Contact Us</Text>
            <Link href="#" color="black">Message Us</Link>
            <Link href="#" color="black">Free Beauty Consultations</Link>
          </VStack>
        </Box>
      </Flex>


      {/* Divider */}
      <hr style={{marginBottom:"25px", marginTop:"25px"}}/>

      <Box bg="white" width="95%" py={4} px={8}  m={"auto"} >
      <Flex
        justifyContent="space-between"
        alignItems="left"
        maxW="1200px"
        mx="auto"
        gap={4}
        m={0}
      >
        {/* Left Section */}
        <Box>
          <Text fontWeight="bold" fontSize="lg">
            THG
          </Text>
          <Text color="gray.500" fontSize="sm">
            2024 © The Hut.com Ltd.
          </Text>
        </Box>

        {/* Right Section */}
        <Box mr="150px">
          <Text fontWeight="bold" mb={2}>
            Pay securely with
          </Text>
          <HStack spacing={4}>
            <Box as={FaCcVisa} size="32px" color="#1A73E8" />
            <Box as={FaCcMastercard} size="32px" color="#EB001B" />
            <Box as={FaCcAmex} size="32px" color="#0077A6" />
            <Box as={SiDinersclub} size="32px" color="#0079BE" />
            <Box as={MdCreditCard} size="32px" color="#666" />
            <Box as={FaCcPaypal} size="32px" color="#003087" />
            <Box as={SiAlipay} size="32px" color="#1677FF" />
            <Box as={SiAfterpay} size="32px" color="#00C853" />
          </HStack>
        </Box>
      </Flex>
    </Box>

      
    </Box>
  );
};

export default Help;
