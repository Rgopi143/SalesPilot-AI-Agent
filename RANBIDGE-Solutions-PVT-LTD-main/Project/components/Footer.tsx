import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex justify-center sm:justify-start">
              <img
                src="https://ik.imagekit.io/lg14qfjkg/RANBIDGE%20SOLUTIONS%20PRIVATE%20LIMITED.png?updatedAt=1766758168670"
                alt="Ranbidge Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain bg-white rounded-full p-2"
              />
            </div>
            <p className="text-slate-400 text-sm text-center sm:text-left">
              Bridging the Gap Between Academics and Industry Excellence
            </p>
            <div className="flex justify-center sm:justify-start space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61578597456959" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook size={6} className="sm:size-6" />
              </a>
              <a href="https://www.instagram.com/rspl_academy?igsh=MXE3NWY3ZmNiNmtucg==" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram size={6} className="sm:size-6" />
              </a>
              <a href="https://www.linkedin.com/in/ranbidge-solutions-private-limited-company-a98983376" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={6} className="sm:size-6" />
              </a>
              <a href="https://x.com/RanbridgePvtLtd" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter size={6} className="sm:size-6" />
              </a>
              <a href="https://www.youtube.com/@RSPL-Academy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Youtube size={6} className="sm:size-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center sm:text-left">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm text-center sm:text-left">
                Home
              </Link>
              <Link to="/about" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm text-center sm:text-left">
                About
              </Link>
              <Link to="/services" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm text-center sm:text-left">
                Services
              </Link>
              <Link to="/domains" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm text-center sm:text-left">
                Domains
              </Link>
              <Link to="/internship" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm text-center sm:text-left">
                Internship
              </Link>
              <Link to="/contact" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm text-center sm:text-left">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center sm:text-left">Services</h3>
            <div className="space-y-2">
              <p className="text-slate-400 text-sm text-center sm:text-left">Internship Programs</p>
              <p className="text-slate-400 text-sm text-center sm:text-left">Skill Development</p>
              <p className="text-slate-400 text-sm text-center sm:text-left">Project-Based Learning</p>
              <p className="text-slate-400 text-sm text-center sm:text-left">Mentorship</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-center sm:text-left">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone size={14} className="text-blue-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+91 8247392437</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail size={14} className="text-blue-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm whiespacte-nowrap">ranbidgesoutionspvtltd@gmail.com</span>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm text-center sm:text-left whitespace-nowrap">
                 Ravindra Nagar, Narasaraopet, Andhra Pradesh, India 522601
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-400 text-xs sm:text-sm">
            <span> 2025 Ranbidge Solutions Pvt Ltd. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <Link 
              to="/privacy-policy" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;