import React from 'react';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import GalleryPreview from '../components/GalleryPreview';
import Testimonials from '../components/Testimonials';
import LocationSection from '../components/LocationSection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <GalleryPreview />
      <Testimonials />
      <LocationSection />
    </div>
  );
};

export default Home;