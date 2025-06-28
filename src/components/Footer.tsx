import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Wrench,
  Star,
  Award,
  Shield,
  Youtube,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-red-400 via-red-700 to-red-500 p-3 rounded-2xl">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <div>
                <span className="text-3xl font-black bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                  Amin Garage
                </span>
                <div className="text-red-400 font-semibold">
                  Premium Auto Care
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
              Your trusted automotive service center providing premium quality
              repairs and maintenance for over 15 years. We keep your vehicle
              running at its absolute best with cutting-edge technology and
              expert craftsmanship.
            </p>

            {/* Awards & Certifications */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="text-sm text-gray-300 font-medium">
                  ASE Certified
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="text-sm text-gray-300 font-medium">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-300 font-medium">
                  4.9/5 Rating
                </span>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="group bg-white/10 hover:bg-blue-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="group bg-white/10 hover:bg-pink-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="group bg-white/10 hover:bg-blue-400 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="group bg-white/10 hover:bg-red-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="group bg-white/10 hover:bg-black p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <SiTiktok className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <div className="space-y-6">
              <div className="group flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-500 mt-1 group-hover:bounce transition-transform duration-300" />
                <div className="text-gray-300">
                  <p className="font-semibold text-white">Address</p>
                  <p className="">
                    F2MV+4GC Faqir Wali
                    <br />
                    Faqirwali, Bahawalnagar District
                    <br />
                    Punjab 62050 Pakistan
                  </p>
                </div>
              </div>

              <div className="group flex items-center space-x-4">
                <Phone className="w-6 h-6 text-red-500 group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-gray-300">+92 (307) 6552348</p>
                </div>
              </div>

              <div className="group flex items-center space-x-4">
                <Mail className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300">amingarage96@gmail.com</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <p className="font-semibold text-white mb-2">Business Hours</p>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>Monday – Thursday: 8:00 AM – 8:00 PM</p>
                  <p>Friday: Closed</p>
                  <p>Saturday: 8:00 AM – 8:00 PM</p>
                  <p>Sunday: 8:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-300">
                © {currentYear} Amin Garage. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Crafted with ❤️ for automotive excellence
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <span className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200">
                Privacy Policy
              </span>
              <span className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200">
                Terms of Service
              </span>
              <span className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200">
                Warranty Info
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
