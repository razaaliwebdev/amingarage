import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Users,
  Wrench,
  Shield,
  Clock,
  Award,
} from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-pulse"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/premium-photo/man-is-working-car-garage-with-other-cars_972324-84169.jpg?uid=R90236058&ga=GA1.1.1285142606.1749889011&semt=ais_hybrid&w=740")',
            animation: "slowZoom 20s ease-in-out infinite alternate",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-black/80"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-ping"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-8 animate-fadeInUp">
          <Award className="w-5 h-5 text-orange-400 mr-2" />
          <span className="text-orange-300 font-medium">
            Award-Winning Service Since 2008
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight animate-fadeInUp animation-delay-200">
          <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Amin Auto Care
          </span>
          <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2">
            You Can Trust
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-400">
          Experience automotive excellence with our certified technicians,
          state-of-the-art equipment, and unwavering commitment to quality. Your
          vehicle deserves nothing less than perfection.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fadeInUp animation-delay-600">
          <Link
            to="/contact"
            className="group relative bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative flex items-center">
              Get Free Quote
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
          <Link
            to="/services"
            className="group border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center"
          >
            <Wrench className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            View Services
          </Link>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 animate-fadeInUp animation-delay-800">
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-orange-500/20 p-4 rounded-full">
                <Wrench className="w-8 h-8 text-orange-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="text-4xl font-black text-white mb-2">15+</div>
            <p className="text-gray-300 font-medium">Years Experience</p>
          </div>

          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-500/20 p-4 rounded-full">
                <Users className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="text-4xl font-black text-white mb-2">5000+</div>
            <p className="text-gray-300 font-medium">Happy Customers</p>
          </div>

          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-yellow-500/20 p-4 rounded-full">
                <Star className="w-8 h-8 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="text-4xl font-black text-white mb-2">4.9</div>
            <p className="text-gray-300 font-medium">Average Rating</p>
          </div>

          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500/20 p-4 rounded-full">
                <Shield className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="text-4xl font-black text-white mb-2">24/7</div>
            <p className="text-gray-300 font-medium">Emergency Service</p>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-2 h-4 bg-gradient-to-b from-orange-400 to-transparent rounded-full mt-3 animate-pulse"></div>
        </div>
        <p className="text-white/70 text-sm mt-2 font-medium">Scroll Down</p>
      </div>

      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1.1);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
