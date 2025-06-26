import React from 'react';
import { Users, Award, Wrench, Heart } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "Master Technician",
      experience: "20+ years",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Maria Garcia",
      position: "Service Manager",
      experience: "15+ years",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "David Wilson",
      position: "Diagnostic Specialist",
      experience: "12+ years",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best experience for our customers."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Work",
      description: "We take pride in delivering exceptional workmanship and using only the highest quality parts."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Honest Service",
      description: "Transparency and honesty in all our interactions. No hidden fees, no unnecessary work."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Expert Technicians",
      description: "Our certified technicians undergo continuous training to stay current with latest technology."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Prime Garage</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Your trusted automotive partner for over 15 years, committed to keeping 
            your vehicle running safely and efficiently.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2008 by automotive enthusiast John Smith, Prime Garage began 
                  as a small family-owned shop with a simple mission: provide honest, 
                  reliable automotive services to our community.
                </p>
                <p>
                  Over the years, we've grown from a one-bay operation to a full-service 
                  automotive center, but our core values remain unchanged. We believe in 
                  treating every customer like family and every vehicle with the care it deserves.
                </p>
                <p>
                  Today, our team of certified technicians serves hundreds of satisfied 
                  customers each month, handling everything from routine maintenance to 
                  complex repairs with the same attention to detail and commitment to quality.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our garage facility"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years of Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To provide exceptional automotive services that ensure our customers' 
                safety and satisfaction while building long-lasting relationships based 
                on trust, transparency, and superior workmanship.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the most trusted automotive service center in our community, 
                known for our expertise, integrity, and commitment to keeping our 
                customers safely on the road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-orange-500 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced and certified technicians are passionate about providing 
              the best automotive service possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.experience} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;