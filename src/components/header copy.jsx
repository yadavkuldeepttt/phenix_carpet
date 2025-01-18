import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown, Search, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT US', href: '#' },
    { 
      name: 'PRODUCTS',
      href: '#',
      submenu: ['Hand Tufted Carpets', 'Modern Carpets', 'Traditional Carpets']
    },
    { name: 'LUXOR COLLECTION', href: '#' },
    { name: 'HOSPITALITY COLLECTION', href: '#' },
    { name: 'CONTACT US', href: '#' },
  ];

  return (
    <div className="relative">
      {/* Top Info Bar */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Near Railway station, Mondh road, Bhadohi, UP, India- 221402
            </span>
          </div>
          <div className="hidden md:flex space-x-4">
            <Instagram className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">PHENIX CARPET</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                  </a>
                  {item.submenu && (
                    <div className="absolute z-10 hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search Icon */}
            <div className="hidden md:flex items-center">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;