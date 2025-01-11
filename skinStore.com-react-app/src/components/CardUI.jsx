import { Box, Image, Text, Flex, Button, Badge, HStack } from '@chakra-ui/react';
import { useState } from 'react';

const CardUI = ({ img1, img2, altText, title, offer, rating, reviews, price }) => {
  const [currentImage, setCurrentImage] = useState(img1);
  const isFifteenPercentOff = offer === "15% off";
  console.log(isFifteenPercentOff)

  return (
    <Box
      width="23%"
      border="none"
      overflow="auto"
      p={4}
      textAlign="left"
      style={{
        width: isFifteenPercentOff ? '22%' : 'auto',
        transition: '0.3s ease-in-out',
      }}
      className={isFifteenPercentOff ? 'fifteen-off-card' : ''}
      > 
    <Box onMouseEnter={() => setCurrentImage(img2)}
      onMouseLeave={() => setCurrentImage(img1)}
      transition="0.3s ease-in-out">
      
      <Image src={currentImage} alt={altText} mx="auto" h="300px"/>
    </Box>

      <Box mt={4}>
        <Text fontWeight="semibold" fontSize="md" lineHeight="short">
          {title}
        </Text>
        <Badge
          mt={5}
          colorScheme="red"
          px={3}
          py={1}
          fontSize="0.8em"
        >
          {offer}
        </Badge>
        <HStack mt={3} h="40px" gap="0px">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <Text
                key={i}
                color={ i < rating ? 'yellow.400' : 'gray.300'}
                fontSize="25px"
              >
                ★
              </Text>
            ))}
          <Text fontSize="sm" ml={2} color="black" border={'1px solid gray'} mr={1} p={1}>
            {rating.toFixed(1)}
          </Text>
          <Text fontSize="sm" color="black">({reviews} Reviews)</Text>
        </HStack>
        <Text mt={2} fontWeight="bold" fontSize="lg" color={'black'}>
          ${price}
        </Text>
      </Box>
      <Button
        mt={4}
        colorScheme="blackAlpha"
        bg="black"
        color="white"
        w="full"
        size="lg"
        _hover={{ bg: 'gray.700' }}
      >
        Quick Buy
      </Button>
    </Box>
  );
};
export default CardUI