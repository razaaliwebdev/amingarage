import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Wrench, MapPin } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Enhanced Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-3 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm relative z-10">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 text-orange-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="hover:text-orange-300 transition-colors duration-200">
                {" "}
                +923076552348
              </span>
            </div>
            <div className="flex items-center space-x-2 group">
              <Mail className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="hover:text-orange-300 transition-colors duration-200">
                amingarage96@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-2 group">
              <MapPin className="w-4 h-4 text-orange-400 group-hover:bounce transition-transform duration-300" />
              <span className="hover:text-orange-300 transition-colors duration-200">
                F2MV+4GC Faqir Wali Faqirwali, Bahawalnagar District Punjab
                62050 Pakistan
              </span>
            </div>
          </div>
          <div className="hidden lg:block">
            <span className="bg-orange-500/20 px-4 py-1 rounded-full text-orange-300 font-medium">
              Mon - Thur: 8AM - 6PM | Sat: 9AM - 4PM
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-2xl shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg"
                    : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <Wrench
                  className={`w-8 h-8 transition-all duration-300 group-hover:rotate-12 ${
                    isScrolled ? "text-white" : "text-orange-400"
                  }`}
                />
              </div>
              <div>
                <span
                  className={`text-2xl font-black transition-colors duration-300 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  Prime Garage
                </span>
                <div
                  className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? "text-blue-600" : "text-orange-300"
                  }`}
                >
                  Premium Auto Care
                </div>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-6 py-3 font-semibold transition-all duration-300 rounded-xl group ${
                    location.pathname === link.path
                      ? isScrolled
                        ? "text-blue-600 bg-blue-50"
                        : "text-orange-300 bg-white/20 backdrop-blur-sm"
                      : isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white hover:text-orange-300 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-blue-600" : "bg-orange-400"
                    }`}
                  ></span>
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Get Quote</span>
              </Link>
            </div>

            {/* Enhanced Mobile menu button */}
            <button
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/20 backdrop-blur-sm"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-2xl">
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-6 py-4 text-base font-semibold rounded-xl transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mt-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-4 rounded-xl font-bold text-center hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
