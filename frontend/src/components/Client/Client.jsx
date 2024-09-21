import client1 from '../../assets/Logo/Partner PNG/13663851656PT_ASTRA_HONDA_MOTOR_.webp';
import client2 from '../../assets/Logo/Partner PNG/470-4703826_sms-logo-png-summarecon-mall-serpong-clipart.webp';
import client3 from '../../assets/Logo/Partner PNG/BPJS Ketenagakerjaan Logo (PNG-1080p) - Vector69Com.webp';
import client4 from '../../assets/Logo/Partner PNG/Bank BTN (Bank Tabungan Negara) Logo (PNG-1080p) - FileVector69.webp';
import client5 from '../../assets/Logo/Partner PNG/Cleanplus.webp';
import client6 from '../../assets/Logo/Partner PNG/Dishub.webp';
import client7 from '../../assets/Logo/Partner PNG/J&T Express Logo (PNG-1080p) - Vector69Com.webp';
import client8 from '../../assets/Logo/Partner PNG/Jualvape.webp';
import client9 from '../../assets/Logo/Partner PNG/LOGO-PERPUSNAS.webp';
import client10 from '../../assets/Logo/Partner PNG/LOGO_KEMENPAREKRAF_(BAPAREKRAF).webp';
import client11 from '../../assets/Logo/Partner PNG/Logo Kalbe Farma (PNG-1080p) - FileVector69.webp';
import client12 from '../../assets/Logo/Partner PNG/Logo_Djarum.webp';
import client13 from '../../assets/Logo/Partner PNG/MGPA.webp';
import client14 from '../../assets/Logo/Partner PNG/Oppo-Logo.wine.webp';
import client15 from '../../assets/Logo/Partner PNG/Pertamina-Logo.wine.webp';
import client16 from '../../assets/Logo/Partner PNG/RCTI.webp';
import client17 from '../../assets/Logo/Partner PNG/Tangsel.webp';
import client18 from '../../assets/Logo/Partner PNG/Telkom Indonesia (2013) Logo (PNG-1080p) - Vector69Com.webp';
import client19 from '../../assets/Logo/Partner PNG/Torabika-sponsor.webp';
import client20 from '../../assets/Logo/Partner PNG/kab bekasi.webp';
import client21 from '../../assets/Logo/Partner PNG/vapelustion_480x480.webp';
import Title from '../Title';

const logos = [
  client1, client2, client3, client4, client5, client6, client7, client8, client9, client10,
  client11, client12, client13, client14, client15, client16, client17, client18, client19, client20, client21, 
];

const Client = () => {
  return (
    <section id="clients" className="py-10 px-4">
      <div className="text-center mb-6 text-2xl font-semibold" data-aos="fade-up">
        <Title text1={'Our'} text2={'Client'} />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="w-32 h-32 flex items-center justify-center bg-transparent shadow-md rounded-md"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Optional: delay each logo's animation
          >
            <img src={logo} alt={`Client logo ${index + 1}`} className="object-contain h-full max-w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;