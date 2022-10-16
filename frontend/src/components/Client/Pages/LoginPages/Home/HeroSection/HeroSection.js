import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import slider1 from '../../../../../../images/slider1.png';
import slider2 from '../../../../../../images/slider2.png';
import slider3 from '../../../../../../images/slider3.png';
import SliderDesign from './SliderDesign';

const Herosection = () => {
    const sliderData = [
        {
          image: slider1,
          title: "Eat Clean And Green",
          text: "Natural is Always Healthy",
          desc:"The more you love your health, more you eat organic. No medicine can heal you better than organic food does."
        },
        {
          image: slider2,
          title: "Eat Clean And Green",
          text: "Natural is Always Healthy",
          desc:"The more you love your health, more you eat organic. No medicine can heal you better than organic food does."
        },
        { image: slider3,
            title: "Eat Clean And Green",
            text: "Natural is Always Healthy",
            desc:"The more you love your health, more you eat organic. No medicine can heal you better than organic food does."
        }
       
      ];
  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <SliderDesign
          title={sliderData[0]?.title}
          text={sliderData[0]?.text}
          desc={sliderData[0]?.desc}
          img={sliderData[0]?.image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderDesign
          title={sliderData[1]?.title}
          text={sliderData[1]?.text}
          desc={sliderData[1]?.desc}
          img={sliderData[1]?.image}
        />
      </SwiperSlide>

      <SwiperSlide>
        <SliderDesign
          title={sliderData[2].title}
          text={sliderData[2].text}
          desc={sliderData[2].desc}
          img={sliderData[2].image}
        />
      </SwiperSlide>
     
      
    </Swiper>
  </>
  )
}

export default Herosection