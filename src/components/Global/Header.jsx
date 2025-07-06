import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navigation = [
    { name: 'Home', route: '/' },
    { name: 'Properties', route: '/propertylistingpage' },
    { name: 'Profile', route: '/userprofilepage' },
    { name: 'Contact', route: '/contactpage' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0" id="Header_2">
            <Link to="/" className="flex items-center">
              <img className="h-10 w-auto" src={images[0]} alt="Logo" />
              <span className="ml-2 text-xl font-bold text-white">RealEstate</span>
            </Link>
          </div>

          <div className="hidden md:block flex-1 max-w-md mx-4" id="Header_3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          <div className="hidden md:flex items-center space-x-4" id="Header_4">
            <nav className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.route}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === item.route ? 'bg-blue-900 text-white' : 'text-gray-100 hover:bg-blue-700'} transition duration-150 ease-in-out`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-2">
              <Link to="/loginpage" className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-white rounded-md hover:bg-white hover:text-blue-800 transition duration-150 ease-in-out">
                Login
              </Link>
              <Link to="/registerpage" className="px-4 py-2 text-sm font-medium text-blue-800 bg-white rounded-md hover:bg-gray-100 transition duration-150 ease-in-out">
                Register
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center" id="Header_5">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4" id="Header_6">
            <form onSubmit={handleSearch} className="mb-4">
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.route}
                  className={`px-3 py-2 rounded-md text-base font-medium ${location.pathname === item.route ? 'bg-blue-900 text-white' : 'text-gray-100 hover:bg-blue-700'} transition duration-150 ease-in-out`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/loginpage" className="px-3 py-2 text-base font-medium text-white hover:bg-blue-700 rounded-md">
                Login
              </Link>
              <Link to="/registerpage" className="px-3 py-2 text-base font-medium text-white hover:bg-blue-700 rounded-md">
                Register
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;