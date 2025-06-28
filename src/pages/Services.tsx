import React from "react";
import { Check, Clock, DollarSign } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Engine Tune-Up",
      description:
        "Complete engine inspection and performance optimization to keep your vehicle running at peak efficiency.",
      features: [
        "Spark plug replacement",
        "Fuel system cleaning",
        "Air filter replacement",
        "Computer diagnostics",
      ],
      price: "Starting at $129.99",
      duration: "1-2 hours",
      image:
        "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg",
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
      price: "Starting at $89.99",
      duration: "1-3 hours",
      image:
        "https://images.pexels.com/photos/159298/gears-cogwheel-machines-engine-159298.jpeg",
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
      price: "Starting at $79.99",
      duration: "2-4 hours",
      image:
        "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg",
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
      price: "Starting at $999.99",
      duration: "1-2 days",
      image:
        "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg",
      category: "Painting",
    },
    {
      title: "Interior Customization",
      description:
        "Enhance your vehicle's interior with our premium customization services.",
      features: [
        "Seat upholstery",
        "Dashboard customization",
        "LED lighting installation",
        "Sound system upgrades",
      ],
      price: "Starting at $299.99",
      duration: "3-5 hours",
      image:
        "https://images.pexels.com/photos/1651135/pexels-photo-1651135.jpeg",
      category: "Dancing",
    },
    {
      title: "Brake System Service",
      description:
        "Complete brake system inspection and repair for optimal stopping power.",
      features: [
        "Brake pad replacement",
        "Rotor resurfacing",
        "Brake fluid flush",
        "Caliper service",
      ],
      price: "Starting at $149.99",
      duration: "2-3 hours",
      image:
        "https://images.pexels.com/photos/5835252/pexels-photo-5835252.jpeg",
      category: "Mechanic",
    },
    {
      title: "AC System Repair",
      description:
        "Professional air conditioning system service and repair to keep you cool.",
      features: [
        "Refrigerant recharge",
        "Compressor service",
        "Leak detection",
        "Ventilation cleaning",
      ],
      price: "Starting at $109.99",
      duration: "1-2 hours",
      image:
        "https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg",
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
      price: "Starting at $799.99",
      duration: "3-5 days",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      category: "Painting",
    },
  ];

  const categories = [
    "All",
    "Mechanic",
    "Electrician",
    "Body Shop",
    "Danting",
    "Painting",
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
                  <div className="md:w-1/3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
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
                        <DollarSign className="w-4 h-4 mr-1" />
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
            Contact us today to schedule your service appointment or get a free
            quote for your automotive needs.
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
