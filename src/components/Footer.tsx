import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-white mb-4">Share Food, Spread Hope</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A community-driven platform connecting food donors with those in need, reducing waste and fighting hunger together.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800/50 p-3 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800/50 p-3 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800/50 p-3 rounded-lg hover:bg-pink-600 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800/50 p-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                About Us
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                How It Works
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                Partner Organizations
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                Events & Drives
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                Volunteer
              </a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                Food Safety Guidelines
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                Donation Tips
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                FAQs
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                Blog
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all"></span>
                Privacy Policy
              </a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-green-600/20 p-2 rounded-lg group-hover:bg-green-600 transition-colors">
                  <MapPin className="h-5 w-5 text-green-400 group-hover:text-white flex-shrink-0" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">123 Hope Street<br />Community Center<br />Your City, ST 12345</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-green-600/20 p-2 rounded-lg group-hover:bg-green-600 transition-colors">
                  <Phone className="h-5 w-5 text-green-400 group-hover:text-white flex-shrink-0" />
                </div>
                <span className="text-gray-400 text-sm">(555) FOOD-HELP</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-green-600/20 p-2 rounded-lg group-hover:bg-green-600 transition-colors">
                  <Mail className="h-5 w-5 text-green-400 group-hover:text-white flex-shrink-0" />
                </div>
                <span className="text-gray-400 text-sm">info@foodshare.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 Share Food, Spread Hope. All rights reserved. Made with <span className="text-red-500">❤️</span> for our community.</p>
        </div>
      </div>
    </footer>
  );
}
