import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  Star,
  Award,
} from "lucide-react";

const LocationSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-red-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-red-100 text-red-700 px-6 py-3 rounded-full font-semibold mb-8">
            <Navigation className="w-5 h-5 mr-2" />
            Find Us
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Visit Our Premium
            </span>
            <br />
            <span className="text-gray-800">Location</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience our Premium Facility – ideally situated in the heart of
            downtown for effortless access, complete with a modern lounge and
            comfortable waiting area designed for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Enhanced Map */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3473.1510133295246!2d73.0411948755323!3d29.482791875211284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDI4JzU4LjEiTiA3M8KwMDInMzcuNiJF!5e0!3m2!1sen!2s!4v1750958993699!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prime Garage Location"
                className="transition-all duration-300 hover:scale-105"
              ></iframe>

              {/* Map Overlay */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-red-500" />
                  <div>
                    <div className="font-bold text-gray-900">Amin Garage</div>
                    <div className="text-sm text-gray-600">Amin Auto Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-2xl">
                  <MapPin className="w-8 h-8 text-white group-hover:bounce transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Our Address
                  </h3>
                  <div>
                    <p className="text-gray-600">
                      F2MV+4GC Faqir Wali
                      <br />
                      Faqirwali, Bahawalnagar District
                      <br />
                      Punjab 62050 Pakistan
                    </p>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 font-medium">
                      Prime downtown location
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="group bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col md:flex-row items-start gap-y-6 md:gap-y-0 md:gap-x-6">
                {/* Icon Section */}
                <div className="bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-2xl flex-shrink-0">
                  <Clock className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Content Section */}
                <div className="w-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Business Hours
                  </h3>
                  <div className="text-gray-600 text-base sm:text-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Monday - Thursday:</span>
                      <span className="font-semibold text-green-600">
                        8:00 AM - 8:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Saturday:</span>
                      <span className="font-semibold text-green-600">
                        8:00 AM - 8:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sunday:</span>
                      <span className="font-semibold text-green-600">
                        8:00 AM - 8:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Friday:</span>
                      <span className="font-semibold text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="group bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col md:flex-row items-start gap-y-6 md:gap-x-6">
                {/* Icon */}
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl flex-shrink-0">
                  <Phone className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Contact Info */}
                <div className="w-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-red-500" />
                      <a
                        href="tel:+923076552348"
                        className="text-gray-600 text-base sm:text-lg hover:underline"
                      >
                        +92 307 6552348
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-red-500" />
                      <a
                        href="mailto:amingarage96@gmail.com"
                        className="text-gray-600 text-base sm:text-lg hover:underline break-all"
                      >
                        amingarage96@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Service Card */}
            <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold">24/7 Emergency Service</h3>
                </div>
                <p className="text-red-100 mb-6 text-lg">
                  24/7 Roadside Assistance – Stuck with a vehicle breakdown? No
                  need to stress. Our dedicated emergency team is on call day
                  and night, ready to get you back on the road quickly and
                  safely.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+923076552348"
                    className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency: +923076552348
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
