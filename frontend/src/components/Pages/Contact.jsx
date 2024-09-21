import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Title from "../Title";

const Contact = () => {
  return (
    <div className="py-8 px-4 max-w-screen-lg mx-auto"> {/* Tambahkan max-w-screen-lg dan mx-auto */}
      <div className="text-2xl text-center mb-8 border-t pt-8">
        <Title text1={'Contact'} text2={'Us'} />
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center"> {/* Tambahkan items-center untuk pemusatan */}
        {/* Map Section */}
        <div className="flex-1 max-w-full md:max-w-lg">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31735.646777494906!2d106.8699185762891!3d-6.378448349710719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecacb6852f47%3A0xa4b6b0f8f61677f1!2sJl.%20Raya%20Ciangsana%20Gg.%2012%20Mei%20Reformasi%2C%20Ciangsana%2C%20Kec.%20Gn.%20Putri%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016967!5e0!3m2!1sen!2sid!4v1692008006195!5m2!1sen!2sid"
              width="100%"
              height="465" // Sesuaikan tinggi peta sesuai kebutuhan
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="flex-1 max-w-full md:max-w-lg">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 bg-gradient-to-br from-maroon-50 via-white to-maroon-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
            <div className="flex items-center mb-6">
              <a href="https://wa.me/6281222200233" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <FaWhatsapp className="text-blue-500 mr-4" size={28} />
                <p className="text-lg text-gray-700">0812-2220-0233 (Faiz)</p>
              </a>
            </div>
            <div className="flex items-center mb-6">
              <a href="https://wa.me/62877777547993" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <FaWhatsapp className="text-blue-500 mr-4" size={28} />
                <p className="text-lg text-gray-700">0877-7754-7993 (Ardi)</p>
              </a>
            </div>
            <div className="flex items-center mb-6">
              <a href="tel:+62282286795" className="flex items-center">
                <FaPhoneAlt className="text-blue-500 mr-4" size={28} />
                <p className="text-lg text-gray-700">(021) 2286795</p>
              </a>
            </div>
            <div className="flex items-center mb-6">
              <a href="mailto:info@afcoproject.com" className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-4" size={28} />
                <p className="text-lg text-gray-700">info@afcoproject.com</p>
              </a>
            </div>
            <div className="flex items-center mb-6">
                <FaMapMarkerAlt className="text-blue-500 mr-4" size={28} />
                <address className="text-lg text-gray-700">
                  Jl. Raya Ciangsana Gg. 12 Mei Reformasi, Ciangsana,<br />
                  Kecamatan Gn.Putri, Kabupaten Bogor,<br />
                  Jawa Barat
                </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
