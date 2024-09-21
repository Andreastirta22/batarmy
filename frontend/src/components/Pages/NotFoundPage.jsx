

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-center">
                <div className="relative inline-block">
                    <div className="glitch" data-text="404">404</div>
                </div>
                <p className="mt-4 text-lg">Oops! The page you’re looking for doesn’t exist.</p>
                <a href="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-400 transition duration-300">
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;
