import React from "react";
import { Check, Clock } from "lucide-react";
import { images } from "../assets/assets.js";

const Services: React.FC = () => {
  const services = [
    {
      title: "Engine Maintenance",
      description:
        "Complete engine inspection and performance optimization to keep your vehicle running at peak efficiency.",
      features: [
        "Spark plug replacement",
        "Fuel system cleaning",
        "Air filter replacement",
        "Computer diagnostics",
      ],
      price: "Starting at PKR 9,999",
      duration: "1–2 hours",
      image: images.mech,
      category: "Mechanic",
    },
    {
      title: "Electrical System Repair",
      description:
        "Diagnosis and repair of all electrical components including wiring, alternators, and starters.",
      features: [
        "Battery testing & replacement",
        "Alternator repair",
        "Starter motor service",
        "Wiring diagnostics",
      ],
      price: "Starting at PKR 6,999",
      duration: "1–3 hours",
      image: images.electrician,
      category: "Electrician",
    },
    {
      title: "Dent Removal & Repair",
      description:
        "Professional dent removal and body repair services to restore your vehicle's appearance.",
      features: [
        "Paintless dent removal",
        "Body panel straightening",
        "Rust repair",
        "Color matching",
      ],
      price: "Starting at PKR 5,999",
      duration: "2–4 hours",
      image: images.danting,
      category: "Body Shop",
    },
    {
      title: "Car Wrapping",
      description:
        "Transform your vehicle's appearance with our premium vinyl wrapping services.",
      features: [
        "Full vehicle wraps",
        "Partial wraps",
        "Color change options",
        "Paint protection film",
      ],
      price: "Starting at PKR 74,999",
      duration: "1–2 days",
      image: images.paint,
      category: "Painting",
    },
    {
      title: "body Shop",
      description:
        "Enhance your vehicle's interior with our premium customization services.",
      features: [
        "Seat upholstery",
        "Dashboard customization",
        "LED lighting installation",
        "Sound system upgrades",
      ],
      price: "Starting at PKR 22,999",
      duration: "3–5 hours",
      image: images.bodyShop1,
      category: "Interior",
    },
    {
      title: "AC System Service",
      description:
        "Professional air conditioning system service and repair to keep you cool.",
      features: [
        "Refrigerant recharge",
        "Compressor service",
        "Leak detection",
        "Ventilation cleaning",
      ],
      price: "Starting at PKR 8,499",
      duration: "1–2 hours",
      image: images.electrician,
      category: "Electrician",
    },
    {
      title: "Custom Paint Jobs",
      description:
        "High-quality custom paint work to give your vehicle a unique look.",
      features: [
        "Color matching",
        "Full respray",
        "Decal application",
        "Clear coat protection",
      ],
      price: "Starting at PKR 59,999",
      duration: "3–5 days",
      image: images.paint,
      category: "Painting",
    },
    {
      title: "Transmission Service",
      description:
        "Complete transmission inspection, fluid change, and adjustment services.",
      features: [
        "Transmission fluid change",
        "Filter replacement",
        "Diagnostic scan",
        "Performance testing",
      ],
      price: "Starting at PKR 14,999",
      duration: "3–4 hours",
      image: images.mechanic1,
      category: "Mechanic",
    },
    {
      title: "Wheel Alignment",
      description:
        "Precision wheel alignment to ensure proper handling and tire wear.",
      features: [
        "Four-wheel alignment",
        "Steering adjustment",
        "Suspension check",
        "Tire inspection",
      ],
      price: "Starting at PKR 3,999",
      duration: "1 hour",
      image: images.wheel,
      category: "Mechanic",
    },
    {
      title: "Exhaust System Repair",
      description: "Complete exhaust system inspection and repair services.",
      features: [
        "Muffler replacement",
        "Catalytic converter service",
        "Pipe welding",
        "Emission testing",
      ],
      price: "Starting at PKR 7,999",
      duration: "2–3 hours",
      image: images.mechanic,
      category: "Mechanic",
    },
    {
      title: "Window Tinting",
      description:
        "Professional window tinting services for privacy and UV protection.",
      features: [
        "Premium tint films",
        "UV protection",
        "Heat reduction",
        "Lifetime warranty",
      ],
      price: "Starting at PKR 12,999",
      duration: "2–3 hours",
      image: images.bodyShop,
      category: "Body Shop",
    },
  ];

  const categories = [
    "All",
    "Mechanic",
    "Electrician",
    "Body Shop",
    "Painting",
    "Interior",
  ];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-[#C0C0C0]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-red-100">
            Comprehensive automotive services from mechanical repairs to custom
            modifications, all performed by certified professionals.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 text-[#C0C0C0] border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-red-600 text-[#C0C0C0]"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 text-[#C0C0C0] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {service.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-semibold text-green-600">
                          {service.price}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-[#C0C0C0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-red-100">
            Get in touch with us today to have your service appointment or a
            free quote designed to meet your automotive requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#C0C0C0] text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Schedule Service
            </a>
            <a
              href="tel:+923076552348"
              className="border-2 border-[#C0C0C0] text-[#C0C0C0] hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
