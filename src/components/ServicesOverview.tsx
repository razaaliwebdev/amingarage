import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/assets.js";
import {
  Wrench,
  Settings,
  Car,
  Gauge,
  Snowflake,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Battery,
  Sparkles,
  Plug,
} from "lucide-react";
import BannerSlider from "./BannerSlider.js";

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Oil Change & Maintenance",
      description:
        "Premium oil changes and comprehensive maintenance to keep your engine running like new.",
      features: [
        "Full Synthetic Options",
        "Multi-Point Inspection",
        "Quick 30-Min Service",
      ],
      price: "From PKR 2,999",
      image: images.mechanic,
      delay: "0",
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "Brake Repair & Service",
      description:
        "Complete brake system service with premium parts and guaranteed safety.",
      features: [
        "Premium Brake Pads",
        "Rotor Resurfacing",
        "Safety Guaranteed",
      ],
      price: "From PKR 11,499",
      image: images.mechanic1,
      delay: "100",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Tire Installation & Repair",
      description:
        "Professional tire services with precision mounting and balancing.",
      features: [
        "Expert Installation",
        "Precision Balancing",
        "Road Hazard Warranty",
      ],
      price: "From PKR 1,999",
      image: images.danting,
      delay: "200",
    },
    {
      icon: <Gauge className="w-10 h-10" />,
      title: "Engine Diagnostics",
      description:
        "Advanced computer diagnostics to identify and resolve issues quickly.",
      features: [
        "Latest Diagnostic Tools",
        "Expert Analysis",
        "Detailed Reports",
      ],
      price: "From PKR 7,499",
      image: images.electrician,
      delay: "300",
    },
    {
      icon: <Snowflake className="w-10 h-10" />,
      title: "Body Shop",
      description:
        "Complete air conditioning system service for optimal comfort.",
      features: [
        "System Inspection",
        "Refrigerant Service",
        "Performance Testing",
      ],
      price: "From PKR 6,799",
      image: images.bodyShop,
      delay: "400",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Transmission Service",
      description:
        "Expert transmission care for smooth and reliable performance.",
      features: ["Fluid Service", "Filter Replacement", "Performance Testing"],
      price: "From PKR 13,799",
      image: images.bodyShop1,
      delay: "500",
    },
    {
      icon: <Battery className="w-10 h-10" />,
      title: "Battery Replacement",
      description: "Professional battery testing and replacement services.",
      features: [
        "Free Battery Testing",
        "Premium Batteries",
        "Proper Disposal",
      ],
      price: "From PKR 9,999",
      image: images.mechanic,
      delay: "600",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Detailing Services",
      description:
        "Complete interior and exterior detailing to restore your vehicle's shine.",
      features: [
        "Full Interior Cleaning",
        "Exterior Polish & Wax",
        "Odor Elimination",
      ],
      price: "From PKR 14,999",
      image: images.danting,
      delay: "700",
    },
    {
      icon: <Plug className="w-10 h-10" />,
      title: "Electrical System Repair",
      description: "Diagnosis and repair of all electrical system components.",
      features: ["Wiring Repair", "Alternator Testing", "Lighting Systems"],
      price: "From PKR 8,999",
      image: images.electrician,
      delay: "800",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Suspension Service",
      description: "Complete suspension inspection and repair services.",
      features: [
        "Shock/Strut Replacement",
        "Alignment Check",
        "Steering System",
      ],
      price: "From PKR 11,999",
      image: images.mechanic1,
      delay: "900",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-6 py-2 rounded-full font-semibold mb-6">
            <Shield className="w-5 h-5 mr-2" />
            Professional Services
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              <span className="audioWide">Amin</span> Auto Care
            </span>
            <br />
            <span className="text-black">Services</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From routine maintenance to complex repairs, we provide
            comprehensive automotive services with cutting-edge technology and
            expert craftsmanship.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden border border-gray-100 animate-fadeInUp`}
              style={{ animationDelay: `${service.delay}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>

                {/* Icon Overlay */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-gray-900 font-bold text-sm">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-300 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/services"
                  className="group/btn inline-flex items-center text-blue-600 hover:text-blue-800 font-bold transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Slider */}
        <div className="w-full  overflow-hidden  shadow-lg shadow-gray-600 rounded">
          <div className="md:w-[1300px]  h-[600px] w-full md:h-[380px]">
            <BannerSlider />
          </div>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default ServicesOverview;
