import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-8xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-[3.7rem]">
          {/* Company Info Section */}
          <div className="space-y-4 flex justify-center flex-col">
            <img 
              src="/images/LOGO3210.png" 
              alt="The Phenix Carpet" 
              className="object-fit h-16 object-contain"
            />
            <p className="text-slate-300 text-sm tracking-[0.04rem] mt-4">
              Expert weavers creating quality carpets using the finest materials including wool, viscose, and silk.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm tracking-[0.04rem]">
              {['LUXOR COLLECTION', 'HAND KNOTTED', 'HAND LOOM', 'HAND TUFTED', 'FLAT WEAVE'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 capitalize hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg  font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm tracking-[0.04rem] text-slate-300">
              <div className="flex  items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-start">Near Railway station, Mondh road, Bhadohi, Uttar Pradesh, India- 221402</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@thephenixcarpets.com" className="hover:text-white transition-colors">
                  info@thephenixcarpets.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+919108290630" className="hover:text-white transition-colors">
                  +91 9454049020
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="space-y-4 tracking-[0.04rem] text-sm">
              <p className="text-slate-300">Stay updated with our latest products and news</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-slate-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                />
                <button className="bg-white text-black px-4 py-2 rounded-r hover:bg-blue-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center space-y-4">
            <p className="text-sm text-slate-400">
              Copyright © {new Date().getFullYear()} The Phenix Carpet, All Rights Reserved.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-4xl mx-auto">
              The Phenix Carpet, India's Largest Manufacturer of Rugs/Carpets, Wool Silk Rugs in India, Area Rugs India Supplier, Largest Rugs Manufacturer India, Rugs exporters in india, Rug exporters in india.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;