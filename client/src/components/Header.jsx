import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
              TravelVista
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a href="#packages" className="text-gray-700 hover:text-primary-600 transition-colors">
              Packages
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </a>
            <Link
              to="/admin/login"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

