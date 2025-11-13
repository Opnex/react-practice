import { useState } from 'react';

function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
              N
            </div>
            <span className="text-xl font-bold text-gray-800">NaijaStore</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Products</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
          </div>
          
          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <button className="relative text-2xl">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700">
              Login
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 text-2xl font-bold"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Products</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 text-left">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default ResponsiveNavbar;