import { Box, Flex, Text, Button, Input, IconButton, HStack, VStack, } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { LuShoppingCart } from "react-icons/lu"
import skinStore_logo from "../assets/skinStore_logo.png"
import Navbar from "./Navbar";
import { AiOutlineUser, AiOutlineShoppingCart, } from 'react-icons/ai';
import {
    HoverCardArrow,
    HoverCardContent,
    HoverCardRoot,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { EmptyState } from "./ui/empty-state"
import Signup from "../pages/Signup";
import { useState } from "react";
import SearchData from "./Search";

const Header = ({user}) => {
    // const [query, setQuery] = useState("")
    // const [products, setProducts] = useState([]);
    // const [error, setError] = useState(null);

  
    
    return (
        <>
            <Box bg="#F2F2F2">
                <Flex justify="right" alignItems="center" gap={4} marginRight={5} >
                    <Button bg="transparent">USD</Button>
                    <a href="#" style={{color: "black" }}>Help</a>
                </Flex>      
            </Box>
            <Flex bg="white"
             justifyContent="space-between"
             alignItems="center"
             maxWidth="95%"
             m="auto" > 
                <Box m={5} >
                    <a href="https://www.skinstore.com/" target="_blank">
                        <img src={skinStore_logo} className="logo" alt="Skin Store logo" style={{ width: "200px"}}/>
                    </a>
                </Box>
                
                <SearchData/>
           
                <Box alignItems="right" >
                {!user ? (
                    
                    <HStack>
                        <HoverCardRoot size="sm" positioning={{ placement: "bottom" }} openDelay={100} closeDelay={100}>
                            <HoverCardTrigger asChild color="black">
                                <HStack>
                                <AiOutlineUser size={24} color="black"/>
                                <Link href="#" >Account</Link>
                                </HStack>
                            </HoverCardTrigger>
                            <HoverCardContent maxWidth="240px">
                                <HoverCardArrow />
                                <Box>                               
                                    <Link to="/login">
                                        <Button colorScheme="grey" variant="outline" mr={4}>Login</Button>
                                    </Link>
                                    <Link to="/signup">
                                        <Button colorScheme="grey" variant="outline" mr={4} onSubmit={Signup}>Sign Up</Button>
                                    </Link>
                                </Box>
                            </HoverCardContent>
                            </HoverCardRoot>
                    </HStack>
                ) : (

                        <>
                            <Text display="inline" mr={4} color="black" >Welcome!{user}</Text>
                            <Button colorScheme="red" variant="outline" mr={4} >Logout</Button>
                        </>
                )}
                    

                </Box>
                <HStack mr={5}>
                    
             
                    
                    <HoverCardRoot size="sm" positioning={{ placement: "bottom" }} openDelay={0} closeDelay={100}>
                        <HoverCardTrigger asChild color="black">
                            <HStack>
                            <AiOutlineShoppingCart size={24} color="black"/>
                            <Link href="#" >Cart</Link>
                            </HStack>
                        </HoverCardTrigger>
                        <HoverCardContent maxWidth="240px">
                            <HoverCardArrow />
                            <Box>                               
                            <Link>
                            <EmptyState
                                icon={<LuShoppingCart />}
                                title="Your cart is empty"
                                description="Explore our products and add items to your cart"
                                />
                            </Link>
                            </Box>
                        </HoverCardContent>
                        </HoverCardRoot>
                    
                </HStack>
            </Flex>
            <Navbar />
            
          
        </>
    )
}

export default Header