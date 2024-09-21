import { FaStar } from 'react-icons/fa'; // Menggunakan FontAwesome untuk ikon bintang

const TestimonialCard = ({ imgSrc, name, title, testimonial, bg, avatar, star }) => {
  return (
    <figure 
      className="relative inline-block text-white text-left text-base shadow-lg transition-transform duration-500 ease-in-out group px-2 sm:px-1 w-full sm:w-[350px] md:w-[400px] h-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
      </div>
      
      {/* Image */}
      <img 
        src={imgSrc} 
        alt={`profile-${name}`} 
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
      />
      
      {/* Rating */}
      <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black bg-opacity-70 p-2 rounded">
        {/* Rating Number */}
        <span className="text-white text-xs sm:text-sm font-bold">{star}</span>
        {/* Icon Bintang */}
        <FaStar className="text-yellow-400" />
      </div>

      {/* Figcaption with Name and Title */}
      <figcaption className="absolute inset-0 p-4 sm:p-3 flex flex-col justify-end">
        {/* Container for Name, Title, and Avatar */}
        <div className="flex items-center space-x-3 bg-black bg-opacity-70 p-2 transition-transform duration-500 ease-in-out group-hover:translate-y-[1px]">
          {/* Avatar */}
          <img 
            src={avatar} 
            alt={`avatar-${name}`} 
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          {/* Name and Position */}
          <div className="text-left flex-1">
            <h3 className="text-lg sm:text-base font-bold uppercase font-oswald">{name}</h3>
            <h5 className="text-xs sm:text-xs uppercase text-gray-400 tracking-wide">{title}</h5>
          </div>
        </div>
        {/* Expandable Container for Testimonial */}
        <div className="bg-black text-white bg-opacity-70 p-2 transition-transform duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-[100px] group-hover:opacity-100 overflow-hidden">
          <blockquote className="italic text-xs sm:text-xs">
            <p>{testimonial}</p>
          </blockquote>
        </div>
      </figcaption>
      
      {/* Invisible link for hover effects */}
      <a href="#" className="absolute inset-0"></a>
    </figure>
  );
};

export default TestimonialCard;
