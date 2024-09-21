import Hero from "../Hero/Hero";
import Services from "./Services";
import Card from '../Card/Card';
import { faPalette, faStar, faUsers, faHeadset } from '@fortawesome/free-solid-svg-icons';
import Title from './../Title';
import Testimonial from './Testimonial';
import HomeContent from "../Content/HomeContent";
import Client from "../Client/Client";

const Home = () => {
  const cardData = [
    {
      title: 'Creative Design',
      description: 'Jelajahi solusi desain inovatif dan kreatif kami yang disesuaikan dengan kebutuhan Anda.',
      icon: faPalette,
    },
    {
      title: 'High Quality',
      description: 'Penggunaan bahan dan pengerjaan berkualitas tinggi dalam produk kami.',
      icon: faStar,
    },
    {
      title: 'Expert Team',
      description: 'Temui tim ahli kami yang berdedikasi untuk mewujudkan visi Anda.',
      icon: faUsers,
    },
    {
      title: 'Customer Support',
      description: 'Kami menawarkan dukungan pelanggan yang luar biasa untuk memastikan kepuasan Anda.',
      icon: faHeadset,
    },
  ];

  return (
    <div>
      <Hero />
      
      <div 
        className="text-center py-8 text-3xl"
        data-aos="fade-up"
      >
        <Title text1={'Mengenal'} text2={'Bat-Army'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Bat-Army Merupakan anak dari perusahaan PT. AFCO Mahakarya Hutama. Penuh dengan semangat dan gaya kerja
          yang profesional, modern, serta memberikan pelayanan yang terbaik kepada para Team terutama
          client
        </p>
      </div>

      <div 
        className="flex flex-wrap justify-center gap-6 mt-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="w-full sm:w-1/2 lg:w-1/5 flex-shrink-0"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Staggered delay for animation
          >
            <div className="flex h-full">
              <Card
                title={card.title}
                description={card.description}
                icon={card.icon}
                className="bg-blue-100 hover:bg-blue-300 transition duration-300 flex flex-col justify-between h-64 p-4 rounded-lg shadow-md" // Adjust h-64 to desired height
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* The following sections are not animated */}
      <HomeContent />
      <Services />
      <Testimonial />
      <Client />
      
    </div>
  );
};

export default Home;
