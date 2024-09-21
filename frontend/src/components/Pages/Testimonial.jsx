import Slider from 'react-slick';
import TestimonialCard from '../Modal/TestimonialCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css'; // Import AOS styles
import {testimonials} from '../../Data/Data';  
import Title from './../Title';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // Set autoplay speed to 2 seconds
  arrows: true,
  centerMode: true,
  centerPadding: '20px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerPadding: '15px',
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerPadding: '10px',
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: '5px',
      },
    },
  ],
};

const TestimonialList = () => (
  <div className="px-4 text-center py-8 text-3xl">
    <Title text1={'Apa yang mereka'} text2={'Katakan tentang kami'}/>
    <Slider 
      {...settings}
      className="gap-4" // Menambahkan gap antar card di slider
    >
      {testimonials.map((item, index) => (
        <TestimonialCard 
          key={index} 
          imgSrc={item.imgSrc} 
          name={item.name} 
          title={item.title} 
          testimonial={item.testimonial} 
          avatar={item.avatar}
          star={item.star}
        />
      ))}
    </Slider>
  </div>
);

export default TestimonialList;
