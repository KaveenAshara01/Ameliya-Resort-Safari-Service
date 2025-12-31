import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/ameliyalogo.jpg"
              alt="Ameliya Elephant Safari Service"
              className="h-14 w-auto object-contain rounded-md"
            />
            <span className="hidden md:block text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-700 to-cyan-700 bg-clip-text text-transparent">
              Ameliya Elephant Safari Service
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/packages" className="text-gray-700 hover:text-primary-600 transition-colors">
              Packages
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About Us
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </a>

          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

