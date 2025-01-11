import  { useEffect, useState } from "react";
import { Box, Grid,Tabs,Button,Flex } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCard from '../components/SwipeCard';
import Card from '../components/Card';
const Products = () => {
    // const [product1,setProduct1]=useState([])
    // const [product2,setProduct2]=useState([])

    // useEffect(()=>{},[])

    
    return (
        <Box mt={10}>
            <Tabs.Root defaultValue="15% Off The Ordinary" >
                <Tabs.List display={"flex"} justifyContent={"center"} maxWidth="25%" m={"auto"}  >

                    <Tabs.Trigger value="15% Off The Ordinary" className="active-tab" >
                        <Button  variant="plain" color={"black"}>15% Off The Ordinary</Button>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="Up to 50% Off" className="active-tab">
                        <Button variant="plain" color={"black"}>Up to 50% Off</Button>
                    </Tabs.Trigger>
                
                </Tabs.List>
                <Tabs.Content value="15% Off The Ordinary"><Flex maxWidth="100%" m="auto"><Card /></Flex></Tabs.Content>
                <Tabs.Content value="Up to 50% Off"><SwipeCard/></Tabs.Content>
            </Tabs.Root>
                    
        </Box>
    )
};

export default Products;