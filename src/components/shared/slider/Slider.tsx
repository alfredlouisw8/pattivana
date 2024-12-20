'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function CustomSlider({ children }) {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>{children}</Slider>;
}
