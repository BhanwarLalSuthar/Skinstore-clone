import { Box,  Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import '../styles/sty.css'
import { useEffect, useState } from "react";
import CardUI from "./CardUI";


const ImageSlider = () => {
    const [products, setProducts] = useState([]);
    const url = "https://skin-json-server.onrender.com/Products";
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  
    // Filter products for discounts other than "15% off"
    const filteredProducts = products.filter((product) => product.discount !== "15% off");
  
    return (
      <Box p={5} pl={5} pr={5} width="96%" m="auto">
        <Swiper
          style={{ width: "100%", height: "auto", textAlign: "center" }}
          modules={[Navigation, Pagination]} // Import required modules
          loop={true} // Enable circular looping
          pagination={{ clickable: true }} // Show clickable dots
          navigation
          spaceBetween={10} // Space between slides
          slidesPerView={4.5} // Show one slide at a time
          slidesPerGroup={4}
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
                console.log(product) 
              <CardUI
                id={product.id}
                key={product.id}
                img1={product.img1}
                img2={product.img2}
                altText={product.name}
                title={product.name}
                offer={`FINAL SALE | ${product.discount}`}
                rating={product.rating}
                reviews={product.reviews}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
};

export default ImageSlider;
