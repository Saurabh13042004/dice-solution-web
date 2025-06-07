'use client';

import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="py-16 relative overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-4">
            <Logo variant="white" size="xl" />
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-md">
              We help founders, startups, and businesses launch faster, grow smarter, 
              and scale effortlessly with cutting-edge technology solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-purple-300 transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-purple-300 transition-colors">
                About Us
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-purple-300 transition-colors">
                Contact
              </Link>
              <button className="text-gray-300 hover:text-purple-300 transition-colors">
                Book a Call
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-3 text-purple-400" />
                <a href="mailto:dicesolutionsofficial@gmail.com" className="hover:text-purple-300 transition-colors">
                  dicesolutionsofficial@gmail.com
                </a>
              </div>
              {/* <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-3 text-purple-400" />
                Panchkula, Chandigarh
              </div> */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Dice Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-purple-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-300 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}