import React from "react";
import { Box, Image, Text, Button, Flex,Tabs } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import '../styles/sty.css'
import Card from "./Card";
import SwipeCard from "./SwipeCard";


const ProductCard = ({ product }) => {
    return (
        <Box bg="white">
            <p style={{color: "black", fontSize: "30px",  textAlign: "center", marginBottom: "30px", fontFamily: '"Lato-Regular", Helvetica, Arial, sans-serif'}}>Shop Top Brands on Dermstore</p>
            <Flex justifyContent="space-between" alignItems="center" gap={4} ml={5} mr={5}>
                <Link href="#">
                    <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/35/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-30T124331.760-164335.png" alt="NeoCutis" />
                </Link>
                <Link href="#">
                    <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/04/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-30T124159.974-164204.png" alt="NeoCutis" />
                </Link>
                <Link href="#">
                    <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-30T123911.716-163923.png" alt="NeoCutis" />
                </Link>
                <Link href="#">
                    <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/01/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-30T123751.910-163801.png" alt="NeoCutis" />
                </Link>
                <Link href="#">
                    <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/24/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-30T123820.680-163824.png" alt="NeoCutis" />
                </Link>
                <Link href="#">
                    <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/52/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-30T123847.252-163852.png" alt="NeoCutis" />
                </Link>
            </Flex>
            <Link href="#" mt={20} pl={5} pr={5}>
                <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/40/original-original-LoyaltyAccountPage_1920x511-074248-203740.jpg" alt="DermStore Rewards img"/>
            </Link>
        
            <p style={{color: "black", fontSize: "30px",  textAlign: "center", marginBottom: "30px",marginTop: "30px", fontFamily: '"Lato-Regular", Helvetica, Arial, sans-serif'}}>Trending Now at Dermstore</p>
            <Flex>
                
            </Flex>
            <Box p={5} pl={5} pr={5} position="absoulate"  m="auto"  >

                <Swiper
                style={{ width:"100%",height:"auto",textAlign: "center"}}
                modules={[Navigation, Pagination,]} // Import required modules
                loop={true} // Enable circular looping
                pagination={{ clickable: true }} // Show clickable dots
                navigation
                spaceBetween={30} // Space between slides
                slidesPerView={4} // Show one slide at a time
                slidesPerGroup={1}
                
                
                >
                {[
                    "https://static.thcdn.com/images/small/webp/widgets/121-us/14/original-SkinStore_Widgets_-_Untitled_Page_-_2024-10-16T155608.916-195614.png",
                    "https://static.thcdn.com/images/small/webp/widgets/121-us/58/original-SkinStore_Widgets_-_Untitled_Page_-_2024-11-06T101940.576-152058.png",
                    "https://static.thcdn.com/images/small/webp/widgets/121-us/49/original-SkinStore_Widgets_-_Untitled_Page_-_2024-10-16T144842.304-184849.png",
                    "https://static.thcdn.com/images/small/webp/widgets/121-us/54/original-SkinStore_Widgets_-_Untitled_Page_-_2024-10-15T164645.746-204654.png",
                    "https://static.thcdn.com/images/small/webp/widgets/121-us/40/original-SkinStore_Widgets_-_Untitled_Page_-_2024-10-07T152826.777-192840.png",
                    "https://static.thcdn.com/images/small/webp/widgets/121-us/55/original-SkinStore_Widgets_-_Untitled_Page_-_2024-10-15T165021.775-205055.png",
                ].map((src, index) => (
                    <SwiperSlide key={index}>
                        <Link href="#">
                            <Box width="250px" height="300px" m="auto" overflow="hidden">
                                <Image
                                    src={src}
                                    alt={`product-img-${index + 1}`}
                                    objectFit="cover"
                                    width="100%"
                                    height="100%"
                                />
                            </Box>
                            <Button position="absolute" top="80%" left="30%" bg="blackAlpha.800" color="white">BEST SELLER</Button>
                        </Link>
                    </SwiperSlide>
                ))}
                </Swiper>
            </Box> 
            <Link href="#" mt={5} pl={5} pr={5}>
                <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/25/original-SITE___App_Exclusive_GWP___App_Disruptor_Banner_%28SHOP_NOW%29_-_Beauty_Bag_%283%29-201625.jpg" alt="Free Gift img"/>
            </Link>
            <h2 style={{ color: "black", fontSize: "30px",  textAlign: "center", paddingBottom: "20px",marginTop: "30px", fontFamily: '"Lato-Regular", Helvetica, Arial, sans-serif'}}>Beauty at Dermstore</h2>
            <Box  width="93%" m="auto">
                <Flex justifyContent="space-between" alignItems="center" gap={8} textAlign="center">
                    <Link>
                        <Flex flexDirection='column'>
                        <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/16/original-SkinStore_Widgets_-_Untitled_Page_-_2024-12-02T145749.195-195816.png" alt="Skin Care img"/>
                        <Box >
                            <h3 style={{color:"black",marginTop:"15px", fontSize:"20px"}}>Skin Care Gifts at Dermstore</h3>
                            <p style={{color:"#2e3337",fontSize: "14px", marginTop:"5px"}}>From serums to moisturizers for varying skin types, our beauty products help nourish the skin.</p>
                            <Box color="black" border="1px solid black" display="inline-block" p={3} mt={5}>SHOP NOW AT DERMSTORE</Box>
                        </Box>
                        </Flex >
                    </Link>
                    <Link>
                        <Flex flexDirection='column'>
                        <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/21/original-SkinStore_Widgets_-_Untitled_Page_-_2024-12-02T160614.354-210621.png" alt="Hair Care img"/>
                        <Box>
                            <h3 style={{color:"black",marginTop:"15px", fontSize:"20px"}}>Hair Care Gifts at Dermstore</h3>
                            <p style={{color:"#2e3337",fontSize: "14px", marginTop:"5px"}}>From serums to moisturizers for varying skin types, our beauty products help nourish the skin.</p>
                            <Box color="black" border="1px solid black" display="inline-block" p={3} mt={5}>SHOP NOW AT DERMSTORE</Box>
                        </Box>
                        </Flex>
                    </Link>
                    <Link>
                        <Flex flexDirection='column'>
                        <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/49/original-New_Arrivals-CarouselBanner2-676x556-213249.jpg" alt="Makeup img"/>
                        <Box >
                            <h3 style={{color:"black",marginTop:"15px", fontSize:"20px"}}>Makeup at Dermstore</h3>
                            <p style={{color:"#2e3337",fontSize: "14px", marginTop:"5px"}}>From serums to moisturizers for varying skin types, our beauty products help nourish the skin.</p>
                            <Box color="black" border="1px solid black" display="inline-block" p={3} mt={5}>SHOP NOW AT DERMSTORE</Box>
                        </Box>
                        </Flex>
                    </Link>
                </Flex>
            </Box>
        
            
        </Box>
    
    );
};

export default ProductCard;