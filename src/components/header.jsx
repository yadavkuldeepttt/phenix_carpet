import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Search,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
} from "lucide-react";
import SearchModal from "./searchModal";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    {
      name: "PRODUCTS",
      href: "#",
      submenu: [
        "Hand Knotted",
        "Hand Loom",
        "Hand Tufted",
        "Flat Weave",
        "Jute",
      ],
    },
    { name: "LUXOR COLLECTION", href: "/luxury-collection" },
    { name: "HOSPITALITY COLLECTION", href: "/hospitality-collection" },
    { name: "CONTACT US", href: "/contact" },
  ];

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // 40px is the height of info bar
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuNavigation = (item) => {
    navigate(`/products/${item.toLowerCase().replace(/\s+/g, "-")}`);

    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Top Info Bar */}
      <div
        className={`bg-gray-800 text-white py-2 px-4 hidden md:block transition-transform duration-300 ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto flex  justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Gaderiyapur, Mondh, Bhadohi, Uttar Pradesh, India 221406
            </span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="https://instagram.com/the_phenix_carpet_?igshid=ZGUzMzM3NWJiOQ=="
              target="_blank"
            >
              <Instagram className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/Pawan.TPC?mibextid=ZbWKwL"
              target="_blank"
            >
              <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
            </a>
            <a
              href="https://twitter.com/CarpetPhenix?t=gB5g2YiB6a9hSbX_jvKgow&s=09"
              target="_blank"
            >
              <RiTwitterXFill className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/company/the-phenix-carprt/"
              target="_blank"
            >
              <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
            </a>
            <a href="http://t.me/the_phenix_carpet" target="_blank">
              <FaTelegramPlane className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
            </a>
            <a href="https://maps.app.goo.gl/KZByNVJAVXbnmgb97" target="_blank">
              <MapPin className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white transition-all duration-400 ${
          isScrolled ? "shadow-lg fixed top-0 left-0 right-0 z-50" : "relative"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <img src="/images/LOGO3210.png" alt="" className="h-16 w-20" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-semibold flex items-center transition-colors duration-200"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                  </a>
                  {item.submenu && (
                    <div className="absolute z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 w-48 bg-gray-800 shadow-lg rounded-md mt-2 py-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          onClick={() => handleMenuNavigation(subItem)}
                          className="block px-4 cursor-pointer py-2 text-sm text-white hover:bg-gray-600 transition-colors duration-200"
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

            <SearchModal />

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
            isMenuOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-base font-semibold tracking-[0.05rem] text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        onClick={() => handleMenuNavigation(subItem)}
                        className="block cursor-pointer px-3 py-2 text-sm tracking-[0.05rem] text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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
