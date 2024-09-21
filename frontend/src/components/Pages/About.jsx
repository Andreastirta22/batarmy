import { FaCogs, FaDollarSign, FaHeadset } from 'react-icons/fa';
import Title from './../Title';
import { teamMembers } from '../../Data/Data';
import videos from '../../assets/About/introduction.mp4';

const About = () => {
  return (
    <div className="py-8 px-4">
      <div className="text-2xl text-center mb-8 border-t pt-8">
        <Title text1={'About'} text2={'Us'} />
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <video
            src={videos}
            autoPlay
            className="w-full h-auto"
            alt="Introduction video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex-1 flex items-center">
          <p className="text-lg text-gray-700 mt-4">
            Bat-Army adalah anak usaha dari PT. AFCO Mahakarya Hutama, yang dikenal sebagai spesialisasi di sektor produksi dengan fokus utama pada pembuatan dan pengembangan solusi inovatif. Bat-Army menggabungkan kekuatan dan keahlian dari tim kami yang dikenal sebagai "Tim Kelelawar Malam" — sebuah tim yang berdedikasi tinggi, profesional, dan berkomitmen untuk memberikan kontribusi signifikan dalam setiap proyek pembangunan.
            <br /> <br /> Kami memahami betapa pentingnya kualitas dan ketepatan waktu dalam setiap fase produksi. Oleh karena itu, Bat-Army berfokus pada penyampaian produk dan solusi yang tidak hanya memenuhi tetapi melebihi harapan pelanggan kami. Tim kami terdiri dari profesional berpengalaman yang memiliki keahlian mendalam dalam berbagai aspek produksi, mulai dari perencanaan hingga eksekusi.
          </p>
        </div>
      </div>
      <div className="text-2xl text-left mb-8 border-t pt-8">
        <Title text1={'Why'} text2={'Choose Us'} />
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <FaCogs size={50} />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">High Quality Service</h3>
          <p className="text-center">
            We ensure that every project is handled with top-notch professionalism and skill.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <FaDollarSign size={50} />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">Affordable Pricing</h3>
          <p className="text-center">
            Get premium service without breaking the bank. We offer competitive rates for our customers.
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-400 to-red-600 text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <FaHeadset size={50} />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">Customer Support</h3>
          <p className="text-center">
            We provide 24/7 support to ensure that your experience with us is smooth and hassle-free.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="text-2xl text-left mb-8 border-t pt-8">
        <Title text1={'Our'} text2={'Team'} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map(member => (
          <div
            key={member.id}
            className={`relative bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-md rounded-2xl p-6 border border-gray-200 flex flex-col items-center ${
              member.wa ? 'cursor-pointer' : ''
            }`}
          >
            <div className="relative flex items-center justify-center w-full h-full">
              <img
                src={member.photo}
                alt={member.name}
                className="w-28 h-28 rounded-full border-4 border-gray-200 object-cover transition-transform duration-300"
              />
              {member.wa && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-white bg-opacity-70 hover:opacity-100">
                  <a
                    href={`https://wa.me/${member.wa}`} // Menggunakan nomor WhatsApp dari data
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-700 flex items-center"
                    aria-label={`Chat with ${member.name} on WhatsApp`}
                  >
                    {/* Tambahkan ikon WhatsApp di sini */}
                    <i className="fab fa-whatsapp fa-2x"></i> {/* Contoh menggunakan FontAwesome */}
                  </a>
                </div>
              )}
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.position}</p>
              {member.wa && (
                <p className="text-gray-500 text-sm mt-2">{member.wa}</p> // Menampilkan nomor WhatsApp
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default About;
