import React, { useState } from "react";
// swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper style
import "swiper/css";
import "swiper/css/effect-fade";
// import required modules
import { EffectFade, Autoplay } from "swiper";
// images
import img1 from "../assets/img/heroSlider/1.jpg";
import img2 from "../assets/img/heroSlider/2.jpg";
import img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "Your Luxury Hotel For Vocation",
    bg: img1,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vocation",
    bg: img2,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vocation",
    bg: img3,
    btnText: "See our rooms",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[600px] lg:h-[860px]"
      loop={true}
    >
      {slides.map((slide, index) => {
        // destructure slide
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide className="h-full bg-pink-400 relative flex justify-center items-center" key={index}>
            <div className="z-20 text-center text-white">
              <div className="uppercase font-tertiary tracking-[6px] mb-5">Just Enjoy and Relax</div>
              <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">{title}</h1>
              {/* btn */}
              <button className="btn btn-lg btn-primary mx-auto">{btnText}</button>
            </div>
            <div className="absolute top-0 h-full w-full">
              <img src={bg} alt="" className="object-cover h-full w-full" />
            </div>
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/70" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
