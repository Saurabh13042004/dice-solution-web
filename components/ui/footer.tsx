'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="py-16 relative overflow-hidden bg-black border-t border-gray-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <Logo variant="white" size="xl" />
            <p className="text-gray-300 leading-relaxed max-w-md mt-4 mb-6">
              We help founders, startups, and businesses launch faster, grow smarter, 
              and scale effortlessly with cutting-edge technology solutions.
            </p>
            
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
              Get Started
              <ArrowRight size={16} />
            </button>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-green-400 transition-colors">
                About Us
              </Link>
              <Link href="#services" className="block text-gray-300 hover:text-green-400 transition-colors">
                Services
              </Link>
              <Link href="#projects" className="block text-gray-300 hover:text-green-400 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-green-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-3 text-green-400" />
                <a href="mailto:dicesolutionsofficial@gmail.com" className="hover:text-green-400 transition-colors">
                  dicesolutionsofficial@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-3 text-green-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-3 text-green-400" />
                Panchkula, Chandigarh
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Dice Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}