import React from "react";
import { Box, Flex,  Spacer, Button} from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Box borderTop="2px solid black" bg="white" color="black">
            
                <ul > 
                    <Flex justifyItems="left" gap={5} ml={5}>
                        <a>Discover DreamStore</a>
                        <a>Brands</a>
                        <a>Sale</a>
                        <a>Skin Care</a>
                        <a>Sunscreen</a>
                        <a>Makeup</a>
                        <a>Hair Care</a>
                        <a>Tools & Devices</a>
                        <a>Fragrance</a>
                        <a>Blog</a>
                    </Flex>
                </ul>
        </Box>
    )
};

export default Navbar;