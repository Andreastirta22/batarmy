import { useState } from 'react';
import { boothImages, stageImages, wallImages, neonImages, thematicImages, mockupImages } from '../../Data/Data';
import Title from '../Title';
import ImageWithWatermark from '../ImageWithWatermark';

const Album = () => {
  const [category, setCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);

  const allImages = [
    ...mockupImages,
    ...boothImages,
    ...stageImages,
    ...wallImages,
    ...thematicImages,
    ...neonImages,
  ];

  const filteredImages = category === 'All' ? allImages : allImages.filter(image => image.title === category);

  const imagesToShow = filteredImages.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 12);
  };

  return (
    <>
      <div className="py-8 px-4">
        <div className="text-center mb-8 text-2xl">
          <Title text1={'Collection'} text2={'Gallery'} />
        </div>
        <div className="flex flex-wrap justify-center mb-8 gap-2 sm:gap-4">
          {/* Buttons for filtering */}
          <button onClick={() => setCategory('All')} className={`py-2 px-4 ${category === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>All</button>
          <button onClick={() => setCategory('3D Charcter and Mockup')} className={`py-2 px-4 ${category === '3D Charcter and Mockup' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>3D Mockup / Character</button>
          <button onClick={() => setCategory('Booth')} className={`py-2 px-4 ${category === 'Booth' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>Booth</button>
          <button onClick={() => setCategory('Backdrop & Wall')} className={`py-2 px-4 ${category === 'Backdrop & Wall' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>Backdrop, Wall and Stage</button>
          <button onClick={() => setCategory('Festival, Konser, and Event')} className={`py-2 px-4 ${category === 'Festival, Konser, and Event' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>Festival/Konser/Event</button>
          <button onClick={() => setCategory('Thematic Event')} className={`py-2 px-4 ${category === 'Thematic Event' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>Thematic Event</button>
          <button onClick={() => setCategory('Neon Box')} className={`py-2 px-4 ${category === 'Neon Box' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition duration-300 ease-in-out transform hover:scale-105`}>Neon Box/Neon Sign</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imagesToShow.map(image => (
            <div key={image.id} className="relative border rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <div className="relative overflow-hidden group h-64"> {/* Mengatur tinggi kontainer gambar */}
                {/* Watermark di atas gambar */}
                <ImageWithWatermark />
                
                {/* Gambar utama dengan z-index lebih rendah */}
                <img
                  src={image.src} 
                  alt={`Image of ${image.title}`} 
                  className="w-full h-full object-contain z-0 transition duration-300 ease-in-out transform group-hover:scale-105"
                />

                {/* Overlay untuk judul gambar */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out z-10">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length > visibleCount && (
          <div className="text-center mt-8">
            <button onClick={loadMore} className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Album;
