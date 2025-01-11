import React from "react";
import { Box, Text, Flex, Button, Link} from '@chakra-ui/react';
import { Tooltip } from "@/components/ui/tooltip"
import { HStack } from "@chakra-ui/react"
import Help from "./Servies&help";
import { FaFacebookF, FaInstagram,FaTwitterSquare, FaTiktok, FaSnapchatGhost, FaPinterestP} from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <hr style={{border: "1px solid grey", marginBottom: "20px", marginTop:"60px"}}/>
        <HStack  width="88%" m="auto"> 

            <Box marginRight="-40px" >
                <p style={{color:"black", marginBottom:"15px" , paddingRight:"20px"}}>Sign up to our email list</p>
                <Button variant="subtle">SIGN UP</Button>
            </Box>
            <Box pl="40%">  
                <p style={{color:"black", marginBottom:"15px"}}>Connect With Us</p>
                <ul style={{
                    listStyleType: "none",
                    display: "flex",
                    gap: "10px",
                    color: "black"
                }}>
                    <li>
                        <Tooltip showArrow content="Instagram">
                        <Link><Box as={FaInstagram} size="32px" color="white" bg="pink.500" /></Link>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip showArrow content="Tiktok">
                        <Link><Box as={FaTiktok} size="32px" color="white" bg="black" /></Link>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip showArrow content="Facebook">
                        <Link><Box as={FaFacebookF} size="32px" color="white" bg="blue" /></Link>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip showArrow content="Twitter">
                        <Link><Box as={FaTwitterSquare} size="32px" color="white" bg="black" /></Link>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip showArrow content="Pinterest">
                        <Link><Box as={FaPinterestP} size="32px" color="white" bg="red" /></Link>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip showArrow content="Snapchat">
                        <Link><Box as={FaSnapchatGhost} size="32px" color="white" bg="yellow.500" /></Link>
                        </Tooltip>
                    </li>
                </ul>
            </Box>
        </HStack>
        <Help />
        <Box bg='gray.200' p={4}>
            <Flex justify='center'>
                <Text>&copy; 2024 SkinStore. All rights reserved.</Text>
            </Flex>
        </Box>

        </>
    )
}

export default Footer;