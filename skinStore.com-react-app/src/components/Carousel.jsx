
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import '../styles/sty.css'


const ImageSlider = () => {
  return (
    <Box p={5} pl={5} pr={5} position="absoulate" bg="white"  m="auto"  >

    <Swiper
      
      modules={[Navigation, Pagination, Autoplay]} // Import required modules
      loop={true} // Enable circular looping
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto change slides
      pagination={{ clickable: true }} // Show clickable dots
      navigation
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Show one slide at a time
      
      
    >
      <SwiperSlide >
        <img
          src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-Group_132-210610.png"
          alt="Slide 1"
          style={{ width: "100%", height: "auto" , cursor: "pointer"}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/45/original-SITE___Sale_on_Sale___HP_Banner_1920x700_2_%281%29-204845.jpg"
          alt="Slide 2"
          style={{ width: "100%", height: "auto" ,cursor: "pointer"}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://static.thcdn.com/images/large/webp/widgets/121-us/43/original-SITE___SKINSTORE___Cozy_Up__Auto-Replenishment___HP_Banner_%281%29-151843.png"
          alt="Slide 3"
          style={{ width: "100%", height: "auto",cursor: "pointer" }}
        />
      </SwiperSlide>
    </Swiper>
    </Box>
  );
};

export default ImageSlider;
