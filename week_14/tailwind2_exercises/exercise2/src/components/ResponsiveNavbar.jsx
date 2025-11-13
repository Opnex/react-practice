import { useState } from 'react';

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-700 font-bold text-lg">🇳🇬</span>
              </div>
              <span className="text-white font-bold text-xl">NaijaMarket</span>
            </div>
          </div>

          {/* Center Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-green-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Cart & Login - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Icon */}
            <button className="relative p-2 text-green-100 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-white text-green-700 rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                5
              </span>
            </button>

            {/* Login Button */}
            <button className="bg-white text-green-700 hover:bg-green-50 px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Cart Icon - Visible on mobile */}
            <button className="relative p-2 text-green-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-white text-green-700 rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                5
              </span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-100 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slides down */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-green-600 rounded-lg mt-2 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-green-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Login Button */}
            <div className="pt-2 border-t border-green-500">
              <button className="w-full bg-white text-green-700 hover:bg-green-50 px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;