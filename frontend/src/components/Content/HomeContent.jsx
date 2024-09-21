import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import content from '../../assets/3.webp';
import Title from '../Title';

const HomeContent = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
      once: false, // Allow animation to trigger multiple times
    });

    // Function to start counting animation
    const startCounting = () => {
      const counters = document.querySelectorAll('.count');
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const speed = +counter.getAttribute('data-speed');
          const count = +counter.innerText;

          const increment = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };

        // Reset counting on each AOS trigger
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                updateCount();
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 }
        );

        observer.observe(counter);
      });
    };

    startCounting();
  }, []);

  return (
    <section className="home-content py-8 mt-12">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        <img 
          src={content} 
          alt="AFCO Logo" 
          className="w-60 h-auto object-cover mb-8 md:mb-0 md:mr-12 border-4 border-gray-500 rounded-lg"
          data-aos="fade-right" // Add AOS animation
        /> 
        <div className="text-center md:text-left max-w-xl" data-aos="fade-left">
          <Title text1={'Dipercaya dari'} text2={'Tahun 2008'} />
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 ml-4 md:ml-8" data-aos="fade-up">
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Thematic events menjadi peran penting dalam proses desain untuk membangun engagement visitors
              terhadap produk kita. Termasuk banyak client kami menerapkan tema di setiap event.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-12">
            <div className="text-center md:text-left md:ml-20" data-aos="fade-up">
              <h2 className="text-2xl font-semibold mb-1">
                <span className="count text-blue-600" data-target="200" data-speed="400">0</span>+
              </h2>
              <p>Pelanggan</p>
            </div>
            <div className="text-center md:text-left md:ml-8" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-semibold mb-1">
                <span className="count text-blue-600" data-target="500" data-speed="400">0</span>+
              </h2>
              <p>Proyek</p>
            </div>
            <div className="text-center md:text-left md:ml-8" data-aos="fade-up" data-aos-delay="400">
              <h2 className="text-2xl font-semibold mb-1">
                <span className="count text-blue-600" data-target="15" data-speed="5000">0</span>Thn
              </h2>
              <p>Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
