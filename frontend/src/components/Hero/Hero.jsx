import { Helmet } from "react-helmet";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import slider1 from './../../assets/y/1.jpg';
import slider2 from './../../assets/y/2.jpg';
import slider3 from './../../assets/y/3.jpg';
import slider4 from './../../assets/y/4.jpg';
import slider5 from './../../assets/y/8.jpg';
import slider6 from './../../assets/y/7.jpg';
import { useState, useEffect } from "react";
import SliderWatermark from '../../components/sliderWatermark'; // Pastikan path ini sesuai

const Hero = () => {
  const slides = [
    { img: slider1 },
    { img: slider2 },
    { img: slider3 },
    { img: slider4 },
    { img: slider5 },
    { img: slider6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div>
      <Helmet>
        <meta name="NightBat" content="Put your description here." />
        <title>NightBat-Production</title>
      </Helmet>

      <div className="relative group w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-lg">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
          className="w-full h-full bg-center bg-cover duration-500 object-cover rounded-lg"
        />
        
        {/* Tambahkan komponen watermark di sini */}
        <SliderWatermark />

        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-2 sm:left-4 md:left-6 lg:left-8 xl:left-10 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer z-10">
          <BsChevronLeft onClick={prevSlide} size={30} />
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-2 sm:right-4 md:right-6 lg:right-8 xl:right-10 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer z-10">
          <BsChevronRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
