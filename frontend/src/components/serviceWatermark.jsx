import servicewatermark from '../assets/watermark/watermark.png';

const serviceWatermark = () => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
            <img
                src={servicewatermark}
                alt="Watermark"
                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 opacity-50" // Ukuran diperbesar
            />
        </div>
    );
};

export default serviceWatermark;
