import React, { useEffect } from 'react';
import Swiper from 'swiper';

const Carousel = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="swiper-container w-full">
      <div className="swiper-wrapper">
        <div className="swiper-slide bg-gray-200 flex items-center justify-center h-64">
          Slide 1
        </div>
        <div className="swiper-slide bg-gray-300 flex items-center justify-center h-64">
          Slide 2
        </div>
        <div className="swiper-slide bg-gray-400 flex items-center justify-center h-64">
          Slide 3
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Carousel;
