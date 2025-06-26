import React from 'react';
import { Check, Clock, DollarSign } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Oil Change & Maintenance",
      description: "Regular oil changes and preventive maintenance to keep your engine running smoothly.",
      features: ["Full synthetic or conventional oil", "Oil filter replacement", "Multi-point inspection", "Fluid level checks"],
      price: "Starting at $39.99",
      duration: "30 minutes",
      image: "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Brake Repair & Service",
      description: "Complete brake system inspection, repair, and replacement for your safety.",
      features: ["Brake pad replacement", "Rotor resurfacing/replacement", "Brake fluid service", "Brake system inspection"],
      price: "Starting at $149.99",
      duration: "2-3 hours",
      image: "https://images.pexels.com/photos/5835252/pexels-photo-5835252.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Tire Installation & Repair",
      description: "Professional tire services including mounting, balancing, and repairs.",
      features: ["Tire mounting & balancing", "Tire rotation", "Patch repairs", "Tire pressure monitoring"],
      price: "Starting at $25.99",
      duration: "45 minutes",
      image: "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Engine Diagnostics",
      description: "Advanced diagnostic tools to identify and resolve engine issues quickly.",
      features: ["Computer diagnostics", "Check engine light diagnosis", "Performance testing", "Repair recommendations"],
      price: "Starting at $99.99",
      duration: "1-2 hours",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "AC Repair & Service",
      description: "Complete air conditioning system repair and maintenance services.",
      features: ["AC system inspection", "Refrigerant recharge", "Component replacement", "Performance testing"],
      price: "Starting at $89.99",
      duration: "1-2 hours",
      image: "https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Transmission Service",
      description: "Expert transmission repair and maintenance for smooth operation.",
      features: ["Transmission fluid service", "Filter replacement", "Diagnostic testing", "Repair & rebuilding"],
      price: "Starting at $179.99",
      duration: "2-4 hours",
      image: "https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Comprehensive automotive services from routine maintenance to complex repairs, 
            all performed by certified technicians using quality parts.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm text-gray-600">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span className="font-semibold text-green-600">{service.price}</span>
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
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to schedule your service appointment or get a free quote 
            for your automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Schedule Service
            </a>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
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