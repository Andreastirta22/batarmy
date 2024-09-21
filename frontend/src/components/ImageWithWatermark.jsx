import watermark from '../assets/watermark/watermark.png';

const ImageWithWatermark = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
      <img
        src={watermark}
        alt="Watermark"
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-50" // Ubah nilai opacity sesuai kebutuhan
      />
    </div>
  );
};

export default ImageWithWatermark;
