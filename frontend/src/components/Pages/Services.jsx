import { Link } from 'react-router-dom';
import { dataCard } from '../../Data/Data'; // Pastikan path ini sesuai
import Title from './../Title';
import ImageWithWatermark from './../ImageWithWatermark';

const Services = () => {
  return (
    <section id="service" className="py-20">
      {/* Title Section */}
      <div className="text-center mb-10 py-8 text-3xl">
        <Title text1="Layanan" text2="Kami" />
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {dataCard.slice(0, 6).map((card, index) => (
          <article
            key={card.id}
            className="relative overflow-hidden bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up" // Add AOS animation
            data-aos-delay={index * 100} // Optional: delay each card's animation
          >
            <div className="relative group">
              {/* Image */}
              <img 
                src={card.src} 
                alt={card.title} 
                className="w-full h-48 object-cover rounded-t-xl transition-all duration-300 group-hover:opacity-50 group-hover:blur-sm"
              /> <ImageWithWatermark />

              {/* Overlay with Animation */}
              <div className="absolute inset-x-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-gray-800 bg-opacity-80 p-4 rounded-t-xl">
                <div className="text-center text-white">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm mb-4">{card.description}</p>
                  <Link to={`/services/${card.id}`} className="text-blue-300 hover:underline">
                    Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
