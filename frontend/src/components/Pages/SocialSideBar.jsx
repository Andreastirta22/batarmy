import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Ikon Instagram dan WhatsApp dari react-icons
import { IoIosArrowDropleftCircle } from 'react-icons/io'; // Ikon dari react-icons/io

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const sidebarRef = useRef(null);

  // Fungsi untuk menutup sidebar setelah 5 detik jika kursor tidak berada di dalamnya
  useEffect(() => {
    let timer;
    if (isOpen && !isHovering) {
      timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000); // Menutup setelah 5 detik
    }
    return () => clearTimeout(timer); // Bersihkan timer jika komponen unmount
  }, [isOpen, isHovering]);

  // Fungsi untuk menangani mouse enter
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Fungsi untuk menangani mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div>
      {/* Tombol untuk membuka/tutup sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1/2 right-0 transform -translate-y-1/2 p-3 bg-transparent rounded-full z-50 transition duration-300"
      >
        <div className={`relative flex items-center justify-center p-3  rounded-full shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-1' : ''}`}>
          <IoIosArrowDropleftCircle size={24} className="transition-transform duration-300" />
        </div>
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-1/2 right-0 transform -translate-y-1/2 p-4 bg-gray-800 rounded-l-lg shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className="space-y-4">
          <li>
            <a
              href="https://www.instagram.com/afcoproject.amh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // Ganti dengan URL profil Instagram Anda
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/6281222200233" // Ganti dengan nomor WhatsApp Anda
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition duration-300"
            >
              <FaWhatsapp size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialSidebar;
