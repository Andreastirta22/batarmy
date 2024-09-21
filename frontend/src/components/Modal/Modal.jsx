
const Modal = ({ isOpen, onClose, card }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <img src={card.src} alt={card.title} className="w-full h-64 object-cover rounded-t-lg mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
        <p className="text-gray-600 mb-4">{card.description}</p>
        <a href={`/services/${card.id}`} className="text-blue-500 font-medium hover:underline">
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default Modal;
