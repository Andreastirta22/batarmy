import waterslide from '../assets/Logo/title.png';

const sliderWatermark = () => {
    return (
        <div className="absolute top-4 left-4 pointer-events-none z-10">
            <img
                src={waterslide}
                alt="Watermark"
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-50" // Ukuran diperbesar
            />
        </div>
    );
};

export default sliderWatermark;

