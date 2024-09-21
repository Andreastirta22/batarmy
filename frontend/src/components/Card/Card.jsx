
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, description, icon, className }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg ${className}`}>
      <div className="text-center text-4xl mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
